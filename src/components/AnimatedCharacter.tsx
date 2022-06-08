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
    body: '/images/characters/odeng_body.png',
    head: '/images/characters/updates/glasses.png',
    spec: '/images/characters/updates/eye.png',
  },
  jakz: {
    body: '/images/characters/odeng_body.png',
    head: '/images/characters/updates/glasses.png',
    spec: '/images/characters/updates/eye.png',
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
        <video autoPlay={true} controls={false} loop={true} muted={true}>
          <source src={'/images/characters/background.mp4'} type="video/mp4" />
        </video>

        {/* <Image
          src={characterImage.body}
          layout="fill"
          alt="odeng"
          className="transition-all"
        /> */}

        <Image
          src={characterImage.head}
          layout="fill"
          alt="odeng"
          className="transition-all"
          style={{
            transform: `translate(${docX * 0.003}px, ${docY * 0.003}px)`,
            transitionProperty: 'all 0.5s ease-in-out',
          }}
        />

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
