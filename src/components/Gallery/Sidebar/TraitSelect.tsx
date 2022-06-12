import * as ScrollArea from '@radix-ui/react-scroll-area'
import * as Collapsible from '@radix-ui/react-collapsible'
import { keyframes, styled } from '../../../../stitches.config'
import { Grid } from '../../Grid'
import TraitCheckbox from './TraitCheckbox'
import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { Flex } from '../../Flex'
import {  useState } from 'react'
import Image from 'next/image'
import { Text } from '../../Text'
import { useSidebarFilter } from '../../../contexts/sidebarFilter/SidebarFilterContext'

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

  const { dispatch } = useSidebarFilter()

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
            <Flex
              css={{
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/6174dede767e8b38ff1ed251/42fb1a3c-8452-4c0e-a8ee-e7f7ca52b951/166704FE-5A42-454B-945A-616EC67EB23D.png?format=750w"
                width={24}
                height={24}
                alt="Trait"
              />
              <Text
                css={{
                  color: '#333',
                }}
              >
                {name}
              </Text>
            </Flex>
            {open ? <MinusIcon /> : <PlusIcon />}
          </Flex>
        </Collapsible.Trigger>
        <CollapsibleContent>
          <StyledScrollArea>
            <StyledViewport>
              <Grid
                css={{
                  gap: '12px',
                }}
              >
                {options.map((option, index) => (
                  <TraitCheckbox
                    key={index}
                    name={option.name}
                    count={option.count}
                    onChecked={(checked) => {
                      checked
                        ? dispatch({
                            type: 'ADD_FILTER',
                            payload: {
                              trait_type: name,
                              value: option.name,
                            },
                          })
                        : dispatch({
                            type: 'REMOVE_FILTER',
                            payload: {
                              trait_type: name,
                              value: option.name,
                            },
                          })
                    }}
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
