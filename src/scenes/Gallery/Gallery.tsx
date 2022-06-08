import Container from '../../components/Container'
import MainGallery from '../../components/Gallery/MainGallery'
import Sidebar from '../../components/Gallery/Sidebar'

export default function Gallery() {
  return (
    <Container
      css={{
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
        gap: '1rem',
        
        // TODO: replace with stitches variable
        '@media (max-width: 768px)': {
          gridTemplateColumns: '1fr',
        }
      }}
    >
      <Sidebar />
      <MainGallery />
    </Container>
  )
}
