import { motion } from 'framer-motion'
import Image from 'next/image'
import { useMemo, useRef } from 'react'
import { useMouse } from 'react-use'
import { styled } from '../../stitches.config'
import { CharacterName } from '../scenes/Homepage/Homepage'

type Props = {
  character: CharacterName
}

const CHARACTER_IMAGES = {
  odeng: {
    body: '/images/characters/updates/background.mp4',
    head: '/images/characters/updates/glasses.png',
    spec: '/images/characters/updates/odeng_spec.png',
    eyes: '/images/characters/updates/odeng_eyes.png',
  },
  jakz: {
    body: '/images/characters/updates/background_jakz.mp4',
    head: '/images/characters/updates/glasses_jakz.png',
    spec: '/images/characters/updates/jakz_spec.png',
    eyes: '/images/characters/updates/jakz_eyes.png',
  },
}

export default function AnimatedCharacter({ character }: Props) {
  const ref = useRef(null)
  const { docX, docY } = useMouse(ref)

  const characterImage = useMemo(() => {
    return CHARACTER_IMAGES[character]
  }, [character])

  return (
    <div ref={ref}>
      <StyledCharacterContainer
        key={character}
        initial={{
          x: '30px',
          opacity: 0,
        }}
        animate={{
          x: '0',
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 0.5,
        }}
      >
        <StyledVideo
          autoPlay={true}
          controls={false}
          loop={true}
          muted={true}
          playsInline={true}
        >
          <source src={characterImage.body} type="video/mp4" />
        </StyledVideo>

        <Image
          src={characterImage.spec}
          layout="fill"
          alt="odeng"
          className="transition-all"
          style={{
            transform: `translate(${docX * 0.005}px, ${docY * 0.005}px)`,
            transitionProperty: 'all 0.5s ease-in-out',
          }}
        />

        <Image
          src={characterImage.eyes}
          layout="fill"
          alt="odeng"
          className="transition-all"
          style={{
            transform: `translate(${docX * 0.005}px, ${docY * 0.005}px)`,
            transitionProperty: 'all 0.5s ease-in-out',
          }}
        />
      </StyledCharacterContainer>
    </div>
  )
}

const StyledCharacterContainer = styled(motion.div, {
  position: 'absolute',
  left: '0px',
  bottom: '0',
  height: '400px',
  width: '400px',

  '@media (min-width: 768px)': {
    height: '500px',
    width: '500px',
  },
})

const StyledVideo = styled('video', {
  margin: 0,
  // padding: '0px',
  border: 0,
})
