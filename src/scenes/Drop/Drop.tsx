import { useState } from 'react'
import Container from '../../components/Container'
import NftDrop from '../../components/Drop/NftDrop'
import NftDropPreview from '../../components/Drop/NftDropPreview'
import { Flex } from '../../components/Flex'
import { useKey } from 'react-use'

const NEW_DROPS = [
  {
    id: 'drop-001',
    name: 'Chibizen - 001',
    url: '/drops/drop-001.mp4',
  },
  {
    id: 'drop-002',
    name: 'Chibizen - 002',
    url: '/drops/drop-002.mp4',
  },
  {
    id: 'drop-003',
    name: 'Chibizen - 003',
    url: '/drops/drop-002.mp4',
  },
]

export type NftDropType = {
  id: string
  name: string
  url: string
}

export default function Drop() {
  const [activeDrop, setActiveDrop] = useState('drop-001')

  const handlePreviousPreview = () => {
    const index = NEW_DROPS.findIndex(({ id }) => id === activeDrop)
    const newIndex = index - 1
    const newDrop = NEW_DROPS[newIndex]
    setActiveDrop(newDrop.id)
  }

  const handleNextPreview = () => {
    const index = NEW_DROPS.findIndex(({ id }) => id === activeDrop)
    const newIndex = index + 1
    const newDrop = NEW_DROPS[newIndex]
    setActiveDrop(newDrop.id)
  }

  useKey('ArrowRight', handleNextPreview, {
    event: 'keyup',
  })
  useKey('ArrowLeft', handlePreviousPreview, {
    event: 'keyup',
  })

  const handleDropClick = (id: string) => {
    setActiveDrop(id)
  }

  return (
    <Container>
      <Flex
        css={{
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {NEW_DROPS.map((drop) => {
          if (activeDrop === drop.id) {
            return <NftDrop key={drop.id} nft={drop} />
          }

          return (
            <NftDropPreview
              key={drop.id}
              nft={drop}
              onClick={() => handleDropClick(drop.id)}
            />
          )
        })}
      </Flex>
    </Container>
  )
}
