import { motion } from 'framer-motion'
import { styled } from '../../../stitches.config'
import { NftDropType } from '../../scenes/Drop/Drop'
import { Flex } from '../Flex'

type Props = {
  nft: NftDropType
}

export default function NftDrop({ nft }: Props) {
  return (
    <StyledNftContainer
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

      <Flex>
        <StyledNftButton
          as="a"
          href="https://opensea.io/assets/ethereum/0x495f947276749ce646f68ac8c248420045cb7b5e/38145258425411010250529754234651290254187327002513803463483378075277134397441"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Opensea
        </StyledNftButton>
      </Flex>
    </StyledNftContainer>
  )
}

const StyledNftContainer = styled(motion.div, {
  height: '70vh',
  width: 'auto',
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
  marginBottom: '20px',
  fontWeight: 'bold',
})

const StyledNftButton = styled(motion.button, {
  backgroundColor: '$blue10',
  padding: '10px 20px',
  borderRadius: '20px',
  margin: '0 auto',
  textAlign: 'center',
  fontWeight: 'bold',
  color: '$white',

  '&:hover': {
    backgroundColor: '$blue8',
  },
})
