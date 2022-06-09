import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon } from '@radix-ui/react-icons'
import { styled } from '../../../../stitches.config'
import { Flex } from '../../Flex'

type Props = {
  name: string
}

export default function TraitCheckbox({ name }: Props) {
  return (
    <Flex css={{ alignItems: 'center' }}>
      <StyledCheckbox id={name}>
        <Checkbox.Indicator>
          <CheckIcon />
        </Checkbox.Indicator>
      </StyledCheckbox>
      <Label css={{ paddingLeft: 10 }} htmlFor={name}>
        {name}
      </Label>
    </Flex>
  )
}

const StyledCheckbox = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 20,
  height: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: `0 2px 2px rgba(0,0,0,0.1)`,
  border: '1px solid #e6e6e6',
  '&:hover': { backgroundColor: '#f1f1f1' },
})

const Label = styled('label', {
  fontSize: 15,
  lineHeight: 1,
  userSelect: 'none',
})
