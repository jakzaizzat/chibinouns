import { styled } from '../../../stitches.config'
import AnimatedCounter from '../AnimatedCounter'
import { Flex } from '../Flex'
import Nft, { INft } from './Nft'

type Props = {
  collections: INft[]
}

export default function MainGallery({ collections }: Props) {
  return (
    <section>
      <Flex
        css={{
          alignItems: 'center',
          justifyContent: 'end',
          borderBottom: '1px solid #e6e6e6',
          marginBottom: '1rem',
        }}
      >
        <StyledTitle>
          <AnimatedCounter value={collections.length} /> Chibi
        </StyledTitle>
      </Flex>

      <StyledNftContainer>
        {collections?.map((collection, i) => (
          <Nft key={collection.id} nft={collection} index={i} />
        ))}
      </StyledNftContainer>
    </section>
  )
}

const StyledNftContainer = styled('section', {
  display: 'grid',
  // gridTemplateColumns: 'repeat(auto-fit, calc(25% - 24px))',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '24px',
  alignItems: 'baseline',
  alignContent: 'baseline',

  '@media (max-width: 768px)': {
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  },
})

const StyledTitle = styled('h2', {
  fontSize: '1.5rem',
  fontWeight: 'medium',
  color: '$gray11',
  marginBottom: '8px',
})
