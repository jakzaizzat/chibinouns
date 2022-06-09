import { styled } from '../../../stitches.config'
import { Box } from '../Box'
import TraitSelect from './Sidebar/TraitSelect'
import { TRAITS } from '../../../constants/traits'
import * as Separator from '@radix-ui/react-separator'
import { Grid } from '../Grid'

export default function Sidebar() {
  const traits = TRAITS

  return (
    <Box>
      <StyledTitle>Filter</StyledTitle>
      <Grid
        css={{
          gridTemplateColumns: '1fr',
          gap: '8px',
        }}
      >
        {traits.map((trait, index) => (
          <>
            <TraitSelect
              key={index}
              name={trait.name}
              options={trait.options}
            ></TraitSelect>
            {index !== traits.length - 1 && <StyledSeparator />}
          </>
        ))}
      </Grid>
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
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
})
