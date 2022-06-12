import { SidebarFilterProvider } from './sidebarFilter/SidebarFilterContext'

type Props = {
  children: React.ReactNode
}

export default function AppProvider({ children }: Props) {
  return <SidebarFilterProvider>{children}</SidebarFilterProvider>
}
