import { useMemo, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Link from '../../components/Link'
import { styled } from '../../../stitches.config'
import Box from '../../components/Box'
import { motion } from 'framer-motion'
import AnimatedCharacter from '../../components/AnimatedCharacter'
import Navigation from '../../components/Navigation'

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
            <EmptyColumn
              viewport={{
                '@md': 'md',
              }}
            ></EmptyColumn>
            <ContentColumn
              viewport={{
                '@lg': 'md',
              }}
            >
              <Box
                css={{
                  marginBottom: '2rem',
                }}
              >
                <Title
                  size={{
                    '@md': 'md',
                  }}
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
                  We're still building, see you soon.
                </Title>
                <Paragraph
                  size={{
                    '@md': 'md',
                  }}
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
                  Web Generated Modular Interfaces is a collection of 10,000
                  randomly generated PFPPP’s (profile picture passion project).
                  We’re reserving 404 from the total supply for the future. No
                  roadmaps or promises, just vibes. ⌐◨-◨
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
                  <Button variant="primary">Follow us</Button>
                  <Button variant="secondary">Discord</Button>
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
                  <Link onMouseEnter={() => handleOnHover('odeng')}>Oden</Link>
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
  backgroundColor: 'red',

  variants: {
    character: {
      jakz: {
        backgroundColor: 'rgb(150 189 175)',
      },
      odeng: {
        backgroundColor: 'rgb(185 185 187)',
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

  variants: {
    size: {
      md: {
        fontSize: '4rem',
      },
    },
  },
})

const Paragraph = styled(motion.p, {
  lineHeight: '2',
  fontSize: '1rem',
  marginBottom: '2rem',
  color: '#363636',

  variants: {
    size: {
      md: {
        fontSize: '1.25rem',
      },
    },
  },
})

const EmptyColumn = styled('div', {
  width: '0',
  variants: {
    viewport: {
      md: {
        width: '25%',
      },
    },
  },
})

const ContentColumn = styled('div', {
  padding: '0 1rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '50vh',
  width: '100%',

  variants: {
    viewport: {
      md: {
        width: '70%',
      },
    },
  },
})
