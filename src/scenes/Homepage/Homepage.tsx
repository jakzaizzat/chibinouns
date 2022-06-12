import { useState } from 'react'
import Container from '../../components/Container'
import { Button } from '../../components/Button'
import { StyledLink } from '../../components/Link'
import { styled } from '../../../stitches.config'
import { motion } from 'framer-motion'
import AnimatedCharacter from '../../components/AnimatedCharacter'
import Navigation from '../../components/Navigation'
import { Box } from '../../components/Box'
import { useCoolMode } from '../../hooks/useCoolMode'

export type CharacterName = 'odeng' | 'jakz'

export default function Homepage() {
  const [activeCharacter, setActiveCharacter] = useState<CharacterName>('odeng')

  const coolModeRef = useCoolMode('/images/glasses.png')

  const handleOnHover = (character: CharacterName) => {
    setActiveCharacter(character)
  }

  return (
    <StyledScreenContainer ref={coolModeRef} character={activeCharacter}>
      <AnimatedCharacter character={activeCharacter} />
      <Navigation />

      <StyledMainContainer>
        <Container>
          <Box
            css={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            <EmptyColumn></EmptyColumn>
            <ContentColumn>
              <Box
                css={{
                  marginBottom: '2rem',
                }}
              >
                <Title
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
                    duration: 0.5,
                  }}
                >
                  We're still building, see you soon. ⌐◨-◨
                </Title>
                <Paragraph
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
                    duration: 0.5,
                    delay: 0.5,
                  }}
                >
                  Chibinouns is a collections of chibi (ちび or チビ) cute mix
                  with nouns culture generated PFPPP 's (profile picture passion
                  project). We're inspired by Nouns and Wgmi Interfaces. No
                  roadmaps or promises, just vibes.
                </Paragraph>

                <motion.div
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
                    duration: 0.5,
                    delay: 0.8,
                  }}
                >
                  <Button
                    as={'a'}
                    href="https://twitter.com/chibinouns"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary"
                  >
                    Follow us
                  </Button>
                  <Button color="secondary">Discord</Button>
                </motion.div>
              </Box>

              <motion.div
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
                  duration: 0.5,
                  delay: 1,
                }}
              >
                <Box>
                  By{' '}
                  <StyledLink
                    href="https://twitter.com/odengarch"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleOnHover('odeng')}
                  >
                    Odeng
                  </StyledLink>
                  <span
                    style={{
                      margin: '0 5px',
                    }}
                  >
                    &
                  </span>
                  <StyledLink
                    href="https://twitter.com/0xJakz"
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => handleOnHover('jakz')}
                  >
                    Jakz
                  </StyledLink>
                </Box>
              </motion.div>
            </ContentColumn>
          </Box>
        </Container>
      </StyledMainContainer>
    </StyledScreenContainer>
  )
}

const StyledScreenContainer = styled('section', {
  height: '100vh',
  position: 'relative',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: 'rgb(255,255,255)',
  overflow: 'hidden',

  variants: {
    character: {
      jakz: {
        backgroundColor: 'rgb(223,249,249)',
      },
      odeng: {
        backgroundColor: 'rgb(255,255,255)',
      },
    },
  },
})

const StyledMainContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',

  '@media (max-width: 768px)': {
    height: 'calc(100vh - 200px)',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
})

const Title = styled(motion.h1, {
  fontSize: '2rem',
  lineHeight: '1',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#2c2b2b',

  '@media (min-width: 768px)': {
    fontSize: '3rem',
  },
})

const Paragraph = styled(motion.p, {
  lineHeight: '2',
  fontSize: '1rem',
  marginBottom: '2rem',
  color: '#363636',

  '@media (min-width: 768px)': {
    fontSize: '1.2rem',
  },
})

const EmptyColumn = styled('div', {
  width: '0',

  '@media (min-width: 768px)': {
    width: '40%',
  },
})

const ContentColumn = styled('div', {
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '50vh',
  width: '100%',

  '@media (min-width: 768px)': {
    width: '60%',
  },
})
