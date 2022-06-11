import Link from 'next/link'
import { styled } from '../../stitches.config'
import Container from './Container'
import Logo from './Logo'

export default function Navigation() {
  return (
    <Container
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo />

      <StyledListContainer>
        <Link href="/gallery">
          <StyledLink>Gallery</StyledLink>
        </Link>
        {/* <Link href="/gallery">
          <StyledLink>Guest book</StyledLink>
        </Link> */}
      </StyledListContainer>
    </Container>
  )
}

const StyledListContainer = styled('div', {
  display: 'grid',
  gridColumnGap: '.5rem',
  gridTemplateColumns: '1fr 1fr',
})

const StyledLink = styled('a', {
  fontSize: '.8rem',
  color: '$black',
  opacity: '.8',
  cursor: 'pointer',

  '&:hover': {
    opacity: 1,
  },
})
