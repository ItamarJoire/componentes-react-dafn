import type { MouseEvent, ReactNode } from 'react'
import type { TopNavLink } from '../Nav/types'

export type { SubMenuLink, TopNavLink } from '../Nav/types'

export type HeaderButtonVariant = 'primary' | 'secondary' | 'tertiary'

export interface HeaderButtonProps {
  variant?: HeaderButtonVariant
  href?: string
  icon?: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
  ariaLabel?: string
  className?: string
  children: ReactNode
}

export interface HeaderProps {
  ministryName?: string
  institutionName?: string
  systemName?: string
  logoHref?: string
  topNavLinks?: TopNavLink[]
  atalhosLabel?: string
  atalhosHref?: string
  entrarShortLabel?: string
  entrarSuffix?: string
  entrarHref?: string
  searchPlaceholder?: string
  onSearch?: (query: string) => void
  showMenuPanel?: boolean
  showNav?: boolean
  showSearch?: boolean
  isMenuOpen?: boolean
  onMenuToggleClick?: () => void
  showAccessibilityWidget?: boolean
}
