import { useMemo } from 'react'
import Container from '../../components/Container'
import MainGallery from '../../components/Gallery/MainGallery'
import Sidebar from '../../components/Gallery/Sidebar'
import { COLLECTIONS } from '../../../constants/collections'
import { useSidebarFilter } from '../../contexts/sidebarFilter/SidebarFilterContext'

export type FilterType = {
  trait_type: string
  value: string
}

export default function Gallery() {
  const { state } = useSidebarFilter()
  const { filters } = state

  const filteredCollections = useMemo(() => {
    if (filters.length === 0) return COLLECTIONS

    return COLLECTIONS.filter((collection) => {
      return filters.every((filter: { trait_type: string; value: string }) => {
        return collection.attributes.some((trait) => {
          return (
            trait.trait_type === filter.trait_type &&
            trait.value === filter.value
          )
        })
      })
    })
  }, [filters])

  return (
    <Container
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gap: '1rem',

        // TODO: replace with stitches variable
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      <Sidebar />
      <MainGallery collections={filteredCollections} />
    </Container>
  )
}
