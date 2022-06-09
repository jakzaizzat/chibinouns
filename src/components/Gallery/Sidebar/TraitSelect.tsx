import * as Collapsible from '@radix-ui/react-collapsible'
import { keyframes, styled } from '../../../../stitches.config'
import { Grid } from '../../Grid'
import TraitCheckbox from './TraitCheckbox'

const traitValue = {
  name: 'Animation',
  value: 'Normal Walk',
  options: ['Normal Walk', 'Walking', "Abloh's Thank You"],
}

type IOption = {
  name: string
  count: number
}

type Props = {
  name: string
  options: IOption[]
}

export default function TraitSelect({ name, options }: Props) {
  return (
    <>
      <Collapsible.Root>
        <Collapsible.Trigger>{name}</Collapsible.Trigger>
        <CollapsibleContent>
          <Grid
            css={{
              gridTemplateColumns: '1fr',
              gap: '8px',
            }}
          >
            {options.map((option, index) => (
              <TraitCheckbox key={index} name={option.name}></TraitCheckbox>
            ))}
          </Grid>
        </CollapsibleContent>
      </Collapsible.Root>
    </>
  )
}

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-collapsible-content-height)' },
})

const close = keyframes({
  from: { height: 'var(--radix-collapsible-content-height)' },
  to: { height: 0 },
})

const CollapsibleContent = styled(Collapsible.Content, {
  padding: '8px 0',
  overflow: 'hidden',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out forwards` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out forwards` },
})
