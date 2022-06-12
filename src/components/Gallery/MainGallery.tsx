import { styled } from '../../../stitches.config'
import Nft, { INft } from './Nft'

type Props = {
  collections: INft[]
}

export default function MainGallery({ collections }: Props) {
  return (
    <StyledNftContainer>
      {collections?.map((collection, i) => (
        <Nft key={collection.id} nft={collection} index={i} />
      ))}
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, calc(25% - 24px))',
  gap: '24px',
  alignItems: 'baseline',
  alignContent: 'baseline',

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
})
