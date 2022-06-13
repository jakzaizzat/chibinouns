import { motion } from 'framer-motion'
import { styled } from '../../../stitches.config'
import { NftDropType } from '../../scenes/Drop/Drop'

type Props = {
  nft: NftDropType
  onClick: () => void
}

export default function NftDropPreview({ nft, onClick }: Props) {
  return (
    <StyledNftContainer
      as={motion.button}
      onClick={onClick}
      initial={{
        y: '30px',
        opacity: 0,
      }}
      animate={{
        y: '0',
        opacity: 1,
      }}
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 1,
        delay: 0.5,
      }}
    >
      <StyledNftPreviewVideo
        autoPlay={true}
        controls={false}
        loop={true}
        playsInline={true}
        height="200px"
        width="100%"
      >
        <source src={nft.url} type="video/mp4" />
      </StyledNftPreviewVideo>

      <StyledNftTitle>{nft.name}</StyledNftTitle>
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled(motion.div, {
  height: '100px',
  width: '100px',
  filter: 'blur(2px)',
  maxWidth: '400px',
  backgroundColor: '$gray9',
  borderRadius: '20px',
  boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)',
})

const StyledNftPreviewVideo = styled('video', {
  height: '100%',
  width: '100%',
  objectFit: 'cover',
  borderRadius: '20px',
  marginBottom: '20px',
})

const StyledNftTitle = styled('h3', {
  textAlign: 'center',
})
