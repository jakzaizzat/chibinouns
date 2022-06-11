import { styled } from '../../../stitches.config'
import Nft, { INft } from './Nft'

type Props = {
  collections: INft[]
}

export default function MainGallery({ collections }: Props) {
  return (
    <StyledNftContainer>
      {collections.map((collection) => (
        <Nft key={collection.id} nft={collection} />
      ))}
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns:  'repeat(auto-fit, minmax(200px, 1fr))',

  justifyContent: 'center',
  gap: '24px',

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
})
