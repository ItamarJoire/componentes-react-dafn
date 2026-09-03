import type { MenuPanelItem, MenuSection } from './types'

const menu1Submenu: MenuPanelItem[] = [
  { id: 'item-1', label: 'Item do Menu 1', href: '#' },
  { id: 'item-2', label: 'Item do Menu 2', href: '#' },
  { id: 'item-3', label: 'Item do Menu 3', href: '#' },
  { id: 'item-4', label: 'Item do Menu 4', href: '#' }
]

export const defaultMenuSections: MenuSection[] = [
  { id: 'menu-1', label: 'Agrupamento do Menu 1', submenu: menu1Submenu },
  { id: 'menu-2', label: 'Agrupamento do Menu 2' },
  { id: 'menu-3', label: 'Agrupamento do Menu 3' },
  { id: 'menu-4', label: 'Agrupamento do Menu 4' }
]
