import { styled } from '../../../stitches.config'
import Box from '../Box'
import NftLink from './NFtLink'
import Trait from './Trait'

export default function NftModal() {
  return (
    <StyledContainer>
      <video
        autoPlay
        controls
        loop
        height="200px"
        width="100%"
        style={{
          borderRadius: '20px',
        }}
      >
        <source
          data-testid="AssetMedia--video"
          src="https://openseauserdata.com/files/1e0598c1ca3f6f4b382b0aa5aa4c756f.mp4#t=0.001"
          type="video/mp4"
        />
      </video>
      <StyledContent>
        <Box>
          <StyledTitle>Chibizen #6 - Megamann X Overdrive</StyledTitle>
          <StyledDescription>
            六 (Roku) = Six . The power of six is Mega. That's the origin of
            Megamann (Rockmann). The overdrive feature is available to try in
            Megamann X 6 (Playstation one). Charge up and Go!
          </StyledDescription>
          <StyledTraitContainer>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
            <Trait name="Animation" value="Megaman Animation"></Trait>
          </StyledTraitContainer>
        </Box>
        <StyledCallToAction>
          <NftLink />
        </StyledCallToAction>
      </StyledContent>
    </StyledContainer>
  )
}

const StyledContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
})

const StyledContent = styled('div', {
  padding: '0 20px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
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
})

const StyledCallToAction = styled('div', {})
