import type { ReactNode } from 'react'

export interface AccordionItem {
  id: string
  title: string
  content: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  /** Permite mais de um item aberto ao mesmo tempo. @default false */
  allowMultiple?: boolean
  /** Ids dos itens abertos inicialmente. */
  defaultOpenIds?: string[]
  /** Quando false, remove o botão/ícone de alternância e mantém todos os itens sempre abertos. @default true */
  interactive?: boolean
  /** Número de colunas do grid. Itens são distribuídos em linhas, alinhando o topo de cada linha independente do tamanho do conteúdo. @default 1 */
  columns?: number
  className?: string
}
