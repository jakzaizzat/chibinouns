import { styled } from '../../../stitches.config'

type Props = {
  name: string
  value: string
}

export default function Trait({ name, value }: Props) {
  return (
    <StyledContainer>
      {name}:<StyledTraitValue>{value}</StyledTraitValue>
    </StyledContainer>
  )
}

const StyledContainer = styled('section', {
  background: '$blue5',
  borderRadius: '8px',
  padding: '8px',
  fontSize: '.8rem',
  color: '$blue12',

  '@media (max-width: 768px)': {
    minWidth: '150px',
  }
})

const StyledTraitValue = styled('p', {
  fontWeight: 'bold',
})
