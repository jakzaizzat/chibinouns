import { styled } from '../../stitches.config'

type Props = {
  children: React.ReactNode
  css?: Object
}

export default function Container({ children, css }: Props) {
  return <StyledContainer css={{ ...css }}>{children}</StyledContainer>
}

const StyledContainer = styled('section', {
  maxWidth: '1400px',
  padding: '1rem',
  margin: '0 auto',
})
