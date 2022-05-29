import { styled } from '../../stitches.config'

type Props = {
  children: React.ReactNode
}

export default function Container({ children }: Props) {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled('section', {
  maxWidth: '1200px',
  padding: '1rem',
  margin: '0 auto',
})
