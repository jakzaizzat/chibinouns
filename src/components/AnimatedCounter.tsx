import { animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Props = {
  value: number
}

export default function AnimatedCounter({ value }: Props) {
  const counterRef = useRef(0)

  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current

    const controls = animate(counterRef.current, value, {
      duration: .5,
      onUpdate: (value) => {
        if (node) {
          // @ts-ignore
          node.textContent = value.toFixed(0)
        }
      },
      onComplete: () => {
        counterRef.current = value
      },
    })

    return () => controls.stop()
  }, [value])

  return <span ref={nodeRef} />
}
