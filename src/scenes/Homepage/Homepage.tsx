import { useMemo, useState } from 'react'
import Image from 'next/image'
import Container from '../../components/Container'
import Logo from '../../components/Logo'
import Button from '../../components/Button'
import Link from '../../components/Link'
import { styled } from '../../../stitches.config'
import Box from '../../components/Box'

type CharacterName = 'odeng' | 'jakz'

export default function Homepage() {
  const [activeCharacter, setActiveCharacter] = useState<CharacterName>('odeng')

  const handleOnHover = (character: CharacterName) => {
    setActiveCharacter(character)
  }

  const themeStyling = useMemo(() => {
    return {
      image:
        activeCharacter === 'odeng'
          ? '/images/characters/odeng_pfp.png'
          : '/images/characters/jakz_pfp.png',
    }
  }, [activeCharacter])

  return (
    <StyledScreenContainer character={activeCharacter}>
      <SyledCharacterImageContainer
        size={{
          '@md': 'md',
        }}
      >
        <Image
          src={themeStyling.image}
          layout="fill"
          alt="odeng"
          className="transition-all"
        />
      </SyledCharacterImageContainer>

      <Container>
        <Logo />
      </Container>

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
              <Box>
                <Title
                  size={{
                    '@md': 'md',
                  }}
                >
                  We're still building, see you soon.
                </Title>
                <Paragraph
                  size={{
                    '@md': 'md',
                  }}
                >
                  Web Generated Modular Interfaces is a collection of 10,000
                  randomly generated PFPPP’s (profile picture passion project).
                  We’re reserving 404 from the total supply for the future. No
                  roadmaps or promises, just vibes. ⌐◨-◨
                </Paragraph>

                <Button variant="primary">Follow us</Button>
                <Button variant="secondary">Discord</Button>
              </Box>

              <Box>
                By <Link onMouseEnter={() => handleOnHover('odeng')}>Oden</Link>
                <span
                  style={{
                    margin: '0 5px',
                  }}
                >
                  &
                </span>
                <Link
                  onMouseEnter={() => handleOnHover('jakz')}
                  onMouseLeave={() => handleOnHover('odeng')}
                >
                  Jakz
                </Link>
              </Box>
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

const SyledCharacterImageContainer = styled('div', {
  position: 'absolute',
  left: '-50px',
  bottom: '0',
  height: '300px',
  width: '300px',

  variants: {
    size: {
      md: {
        height: '600px',
        width: '600px',
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

const Title = styled('h1', {
  fontSize: '3rem',
  lineHeight: '1',
  fontWeight: 'bold',
  marginBottom: '1rem',

  variants: {
    size: {
      md: {
        fontSize: '4rem',
      },
    },
  },
})

const Paragraph = styled('p', {
  lineHeight: '2',
  fontSize: '1rem',
  marginBottom: '2rem',
  color: '#000',

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
