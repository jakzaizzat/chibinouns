import { styled } from '../../stitches.config'

type Props = {
  children: React.ReactNode
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function Link({ children, onMouseEnter, onMouseLeave }: Props) {
  return (
    <StyledLink onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </StyledLink>
  )
}
const StyledLink = styled('a', {
  color: '$blue600',
  fontWeight: '600',
  cursor: 'pointer',

  '&:hover': {
    color: '$blue800',
    borderBottom: '1px solid $blue800',
  },

  '& + a': {
    marginLeft: '10px',
  },
})
