import { styled } from '../../../stitches.config'
import { Box } from '../Box'
import TraitSelect from './Sidebar/TraitSelect'
import { TRAITS } from '../../../constants/traits'

export default function Sidebar() {
  const traits = TRAITS

  return (
    <Box>
      <StyledTitle>Filter</StyledTitle>
      {traits.map((trait, index) => (
        <TraitSelect
          key={index}
          name={trait.name}
          options={trait.options}
        ></TraitSelect>
      ))}
    </Box>
  )
}

const StyledTitle = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: 'bold',
})
