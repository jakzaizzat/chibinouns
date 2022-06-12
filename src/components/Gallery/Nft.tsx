import Image from 'next/image'
import { keyframes, styled } from '../../../stitches.config'
import { motion } from 'framer-motion'
import * as Dialog from '@radix-ui/react-dialog'
import NftModal from './NftModal'

type ITraits = {
  trait_type: string
  value: string
}

export type INft = {
  id: string
  name: string
  description: string
  imageUrl: string
  videoUrl: string
  link: string
  attributes: ITraits[]
}

export default function Nft({ nft, index = 0 }: { nft: INft; index?: number }) {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <StyledNftContainer
          animate={{ opacity: 1 }}
          initial={{
            opacity: 0,
          }}
          exit={{ opacity: 0 }}
          transition={{
            type: 'tween',
            ease: 'easeInOut',
            duration: index / 10 + 0.2,
          }}
        >
          <StyledImage
            src={nft.imageUrl}
            height={400}
            width={400}
            alt="odeng"
          />
          <StyledText>
            Chibizen #{nft.id} <StyledName> {nft.name}</StyledName>
          </StyledText>
        </StyledNftContainer>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Overlay>
          <Content>
            <NftModal nft={nft} />
          </Content>
        </Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

const StyledNftContainer = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.05)',
  },
})

const StyledImage = styled(Image, {
  borderRadius: '20px',
  marginBottom: '20px',
})

const StyledText = styled('div', {
  fontSize: '.8rem',
  marginTop: '10px',
  textAlign: 'center',
  color: '$gray11',
})

const StyledName = styled('p', {
  color: '$black',
})

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
})

const Overlay = styled(Dialog.Overlay, {
  background: 'rgba(0 0 0 / 0.5)',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'grid',
  placeItems: 'center',
  overflowY: 'auto',

  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
  },
})

const Content = styled(Dialog.Content, {
  minWidth: 300,
  background: 'white',
  padding: 30,
  borderRadius: 4,
  maxWidth: '80vw',
})
