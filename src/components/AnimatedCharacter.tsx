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
    head: '/images/characters/odeng_head.png',
    spec: '/images/characters/odeng_spec.png',
  },
  jakz: {
    body: '/images/characters/jakz_body.png',
    head: '/images/characters/jakz_head.png',
    spec: '/images/characters/jakz_spec.png',
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
        size={{
          '@md': 'md',
        }}
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
        <Image
          src={characterImage.body}
          layout="fill"
          alt="odeng"
          className="transition-all"
        />

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
