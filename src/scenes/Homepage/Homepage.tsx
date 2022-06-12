import { useMemo, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import { Button } from '../../components/Button'
import Link from '../../components/Link'
import { styled } from '../../../stitches.config'
import { motion } from 'framer-motion'
import AnimatedCharacter from '../../components/AnimatedCharacter'
import Navigation from '../../components/Navigation'
import { Box } from '../../components/Box'

export type CharacterName = 'odeng' | 'jakz'

export default function Homepage() {
  const [activeCharacter, setActiveCharacter] = useState<CharacterName>('odeng')

  const handleOnHover = (character: CharacterName) => {
    setActiveCharacter(character)
  }

  return (
    <StyledScreenContainer character={activeCharacter}>
      <AnimatedCharacter character={activeCharacter} />
      <Navigation />

      <StyledMainContainer
        size={{
          '@md': 'md',
        }}
      >
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
                  <Link onMouseEnter={() => handleOnHover('odeng')}>Odeng</Link>
                  <span
                    style={{
                      margin: '0 5px',
                    }}
                  >
                    &
                  </span>
                  <Link onMouseEnter={() => handleOnHover('jakz')}>Jakz</Link>
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

  variants: {
    size: {
      md: {
        height: 'calc(100vh - 200px)',
      },
    },
  },
})

const Title = styled(motion.h1, {
  fontSize: '3rem',
  lineHeight: '1',
  fontWeight: 'bold',
  marginBottom: '1rem',
  color: '#2c2b2b',

  '@media (min-width: 768px)': {
    fontSize: '4rem',
  },
})

const Paragraph = styled(motion.p, {
  lineHeight: '2',
  fontSize: '1rem',
  marginBottom: '2rem',
  color: '#363636',

  '@media (min-width: 768px)': {
    fontSize: '1.5rem',
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
