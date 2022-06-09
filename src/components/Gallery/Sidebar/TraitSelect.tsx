import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Collapsible from '@radix-ui/react-collapsible'
import { keyframes, styled } from '../../../../stitches.config'
import { Grid } from '../../Grid'
import TraitCheckbox from './TraitCheckbox'
import { BoxIcon, MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { Flex } from '../../Flex'
import { useState } from 'react'

type IOption = {
  name: string
  count: number
}

type Props = {
  name: string
  options: IOption[]
}

export default function TraitSelect({ name, options }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Collapsible.Root open={open} onOpenChange={setOpen}>
        <Collapsible.Trigger asChild>
          <Flex
            as="button"
            css={{
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            {name}
            {open ? <MinusIcon /> : <PlusIcon />}
          </Flex>
        </Collapsible.Trigger>
        <CollapsibleContent>
          <StyledScrollArea>
            <StyledViewport>
              <Grid
                css={{
                  gap: '12px',
                  backgroundColor: '#ffffff',
                }}
              >
                {options.map((option, index) => (
                  <TraitCheckbox
                    key={index}
                    name={option.name}
                    count={option.count}
                  ></TraitCheckbox>
                ))}
              </Grid>
            </StyledViewport>
            <StyledScrollbar orientation="vertical">
              <ScrollArea.Thumb />
            </StyledScrollbar>
            <ScrollArea.Corner />
          </StyledScrollArea>
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
  '&[data-state="open"]': { animation: `${open} 300ms ease-out forwards` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out forwards` },
})

const StyledScrollArea = styled(ScrollArea.Root, {
  height: 'inherit',
  maxHeight: 150,
  width: '100%',
  padding: '0 16px 0 0',
})

const StyledViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
  borderRadius: 'inherit',
})

const StyledScrollbar = styled(ScrollArea.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  background: '$gray4',
  transition: 'background 160ms ease-out',
  '&:hover': { background: '$gray11' },
  '&[data-orientation="vertical"]': { width: 2 },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: 10,
  },
})
