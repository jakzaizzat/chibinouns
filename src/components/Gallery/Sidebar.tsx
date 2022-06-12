import { styled } from '../../../stitches.config'
import { Box } from '../Box'
import TraitSelect from './Sidebar/TraitSelect'
import { TRAITS } from '../../../constants/traits'
import * as Separator from '@radix-ui/react-separator'
import { Grid } from '../Grid'
import { DashboardIcon } from '@radix-ui/react-icons'
import { Flex } from '../Flex'
import { useEffect, useMemo, useState } from 'react'
import { useWindowSize } from 'react-use'
import { AnimatePresence, motion } from 'framer-motion'

export default function Sidebar() {
  const traits = TRAITS

  const [isOpen, setIsOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // TODO: Move to responsive hooks
  const { width } = useWindowSize()

  useEffect(() => {
    setIsDesktop(width > 768)
  }, [width])

  return (
    <Box
      css={{
        position: 'sticky',
        height: 'calc(100vh - 300px)',
        top: 0,

        '@media (max-width: 768px)': {
          height: 'auto',
          position: 'relative',
        },
      }}
    >
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid #e6e6e6',
          marginBottom: '1rem',
        }}
      >
        <StyledTitle>Filter</StyledTitle>
        {!isDesktop && (
          <Box as="button" onClick={() => setIsOpen(!isOpen)}>
            <DashboardIcon />
          </Box>
        )}
      </Flex>
      {(isOpen || isDesktop) && (
        <AnimatePresence key="sidebar-mobile">
          <motion.div
            initial={{
              y: '10px',
              opacity: 0,
            }}
            animate={{
              y: '0',
              opacity: 1,
            }}
            exit={{ opacity: 0, y: '10px' }}
            transition={{
              type: 'tween',
              ease: 'easeInOut',
              duration: 0.5,
            }}
          >
            <Grid
              css={{
                gridTemplateColumns: '1fr',
                gap: '8px',
              }}
            >
              {traits.map((trait, index) => (
                <Box key={index}>
                  <TraitSelect
                    name={trait.name}
                    options={trait.options}
                  ></TraitSelect>
                  {index !== traits.length - 1 && <StyledSeparator />}
                </Box>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      )}
    </Box>
  )
}

const StyledTitle = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginBottom: '8px',
})

const StyledSeparator = styled(Separator.Root, {
  backgroundColor: '$gray7',
  marginTop: '8px',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
})
