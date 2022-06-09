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
    <Box>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'space-between',
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
