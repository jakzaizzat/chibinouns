// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { COLLECTIONS } from '../../constants/collections'

type Data = {
  traits: TraitType[]
}

type TraitType = {
  name: string
  options: AttributeType[]
}

type AttributeType = {
  name: string
  count: number
}

// Generate traits from collections
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const collections = COLLECTIONS

  const traits: TraitType[] = []

  collections.forEach((collection) => {
    collection.attributes.forEach((attributes) => {
      // Check if its a new traits
      if (!traits.find((trait) => trait.name === attributes.trait_type)) {
        traits.push({
          name: attributes.trait_type,
          options: [
            {
              name: attributes.value,
              count: 1,
            },
          ],
        })
      } else {
        // If its an existing trait, add the value
        const traitIndex = traits.findIndex(
          (trait) => trait.name === attributes.trait_type,
        )
        // If existing value, increment count
        const valueIndex = traits[traitIndex].options.findIndex(
          (value) => value.name === attributes.value,
        )

        if (valueIndex !== -1) {
          traits[traitIndex].options[valueIndex].count++
        } else {
          traits[traitIndex].options.push({
            name: attributes.value,
            count: 1,
          })
        }
      }
    })
  })

  res.status(200).json({ traits })
}
