import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { styled } from '../../../../stitches.config'
import { Box } from '../../Box'
import { Flex } from '../../Flex'

type Props = {
  name: string
  count: number
}

export default function TraitCheckbox({ name, count }: Props) {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <StyledCheckbox id={name}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </StyledCheckbox>
      <Label css={{ paddingLeft: 10 }} htmlFor={name}>
        {name}
        <Box as="span" css={{
          fontSize: '0.75rem',
          marginLeft: '8px',
          color: '$gray8',
        }}>({count})</Box>
      </Label>
    </Flex>
  )
}

const StyledCheckbox = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 16,
  height: 16,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $gray7',
  '&:hover': { backgroundColor: '#f1f1f1' },
})

const Label = styled('label', {
  fontSize: 15,
  lineHeight: 1.5,
  userSelect: 'none',
  color: '$gray11',
  display: 'flex',
  alignItems: 'center',
  width: '100%',
})
