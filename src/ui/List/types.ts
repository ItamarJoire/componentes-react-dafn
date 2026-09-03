import type { ReactNode } from 'react'

export type ListDensity = 'high' | 'medium' | 'low'

export interface ListItem {
  id: string
  /** Ícone exibido à esquerda do item. */
  icon?: ReactNode
  /** Texto principal do item. */
  title: ReactNode
  /** Texto secundário exibido à direita do item (ex: metadado, data, valor). */
  meta?: ReactNode
  /** Torna o item clicável, renderizando-o como botão. */
  onClick?: () => void
}

export interface ListProps {
  items: ListItem[]
  /** Densidade de espaçamento dos itens da lista. @default 'medium' */
  density?: ListDensity
  className?: string
}
