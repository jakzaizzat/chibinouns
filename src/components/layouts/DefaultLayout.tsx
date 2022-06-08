import Container from '../Container'
import Navigation from '../Navigation'

type Props = {
  children: React.ReactNode
}

export default function DefaultLayout({ children }: Props) {
  return (
    <main>
      <Navigation />
      <Container>{children}</Container>
    </main>
  )
}
