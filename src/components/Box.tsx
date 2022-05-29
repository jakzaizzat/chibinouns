import { styled } from '../../stitches.config'

type Props = {
  children?: React.ReactNode
  css?: Object
}
export default function Box({ children, css }: Props) {
  return (
    <StyledBox
      css={{
        ...css,
      }}
    >
      {children}
    </StyledBox>
  )
}

const StyledBox = styled('div')