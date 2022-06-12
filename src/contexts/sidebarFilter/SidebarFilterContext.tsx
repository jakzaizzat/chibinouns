import { createContext, useContext, useReducer } from 'react'

type FilterType = {
  trait_type: string
  value: string
}

type Action =
  | {
      payload: any
      type: 'ADD_FILTER'
    }
  | {
      payload: any
      type: 'REMOVE_FILTER'
    }
type Dispatch = (action: any) => void
type State = {
  filters: FilterType[]
}
type ProviderProps = {
  children: React.ReactNode
}

const SidebarFilterContext = createContext<
  | {
      state: State
      dispatch: Dispatch
    }
  | undefined
>(undefined)

function SidebarFilterReducer(state: State, action: Action) {
  switch (action.type) {
    case 'ADD_FILTER': {
      return {
        filters: [...state.filters, action.payload],
      }
    }
    case 'REMOVE_FILTER': {
      console.log('REMOVE_FILTER', action.payload)
      return {
        filters: [...state.filters].filter(
          (filter) =>
            filter.value !== action.payload.value ||
            filter.trait_type !== action.payload.trait_type,
        ),
      }
    }
    default: {
      throw new Error(`Unhandled action type`)
    }
  }
}

function SidebarFilterProvider({ children }: ProviderProps) {
  // @ts-ignore
  const [state, dispatch] = useReducer(SidebarFilterReducer, {
    filters: [],
  })

  const value = { state, dispatch }
  return (
    <SidebarFilterContext.Provider value={value}>
      {children}
    </SidebarFilterContext.Provider>
  )
}

function useSidebarFilter() {
  const context = useContext(SidebarFilterContext)

  if (!context) {
    throw new Error(
      'useSidebarFilter must be used within a SidebarFilterProvider',
    )
  }

  return context
}

export { SidebarFilterProvider, useSidebarFilter }
