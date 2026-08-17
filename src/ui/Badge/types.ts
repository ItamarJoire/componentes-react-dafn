import type { ReactNode } from 'react'

export type BadgeVariant = 'danger' | 'info' | 'warning' | 'success'

export interface BadgeProps {
  /** Cor/variante visual do badge. @default 'info' */
  variant?: BadgeVariant
  /** Rótulo exibido antes do texto principal (ex: 'plan', 'rel'). Se omitido, exibe apenas o children. */
  label?: ReactNode
  /** Texto principal do badge (ex: 'Atrasado', 'Aguardando'). */
  children: ReactNode
  className?: string
}
