import { styled } from '../../../stitches.config'
import NftLink from './NFtLink'
import Trait from './Trait'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { INft } from './Nft'
import { Box } from '../Box'

type Props = {
  nft: INft
}

export default function NftModal({ nft }: Props) {
  return (
    <StyledContainer>
      <video
        autoPlay
        controls={false}
        loop
        playsInline={true}
        height="200px"
        width="100%"
        style={{
          borderRadius: '20px',
        }}
      >
        <source
          data-testid="AssetMedia--video"
          src={nft.videoUrl}
          type="video/mp4"
        />
      </video>
      <StyledContent>
        <Box>
          <StyledTitle>
            Chibizen #{nft.id} - {nft.name}
          </StyledTitle>
          <StyledDescription>{nft.description}</StyledDescription>
          <StyledScrollArea>
            <ScrollArea.Viewport>
              <StyledTraitContainer>
                {nft.attributes?.map((trait) => (
                  <Trait
                    key={trait.trait_type}
                    name={trait.trait_type}
                    value={trait.value}
                  />
                ))}
              </StyledTraitContainer>
            </ScrollArea.Viewport>
            <ScrollArea.Scrollbar orientation="horizontal">
              <ScrollArea.Thumb />
            </ScrollArea.Scrollbar>
            <ScrollArea.Corner />
          </StyledScrollArea>
        </Box>
        <StyledCallToAction>
          <NftLink link={nft.link} />
        </StyledCallToAction>
      </StyledContent>
    </StyledContainer>
  )
}

const StyledContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  zIndex: 1,

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
})

const StyledContent = styled('div', {
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@media (max-width: 768px)': {
    padding: '10px 0',
    overflowY: 'auto',
  },
})

const StyledScrollArea = styled(ScrollArea.Root, {
  width: '100%',
  borderRadius: 4,
  overflow: 'hidden',

  '@media (max-width: 768px)': {
    height: '100px',
  },
})

const StyledTitle = styled('h3', {
  fontSize: '1.2rem',
  fontWeight: 'bold',
  marginBottom: '10px',
})

const StyledDescription = styled('p', {
  color: '$gray11',
  marginBottom: '20px',
})

const StyledTraitContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '12px',

  '@media (max-width: 768px)': {
    display: 'flex',
  },
})

const StyledCallToAction = styled('div', {})
