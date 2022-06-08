import { styled } from '../../../stitches.config'
import Nft from './Nft'

import { COLLECTIONS } from '../../../constants/collections'

export default function MainGallery() {
  return (
    <StyledNftContainer>
      {COLLECTIONS.map((collection) => (
        <Nft key={collection.id} nft={collection} />
      ))}
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
})
