import { styled } from '../../../stitches.config'
import Nft from './Nft'
import NftModal from './NftModal'

export default function MainGallery() {
  return (
    <StyledNftContainer>
      <Nft />
      <Nft />
      <Nft />
      <Nft />
      <Nft />
      <Nft />
      <Nft />
      <Nft />
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '16px',
})
