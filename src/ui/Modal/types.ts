import type { ReactNode } from 'react'

export type ModalSize = 'small' | 'medium' | 'large'

export interface ModalProps {
  /** Controla a visibilidade do modal. */
  open: boolean
  /** Chamado ao clicar no "x", no overlay ou ao pressionar Esc. */
  onClose: () => void
  /** Título exibido no cabeçalho. Quando omitido, o cabeçalho não é renderizado. */
  title?: ReactNode
  /** Conteúdo principal do modal. Rola internamente quando ultrapassa a altura máxima. */
  children?: ReactNode
  /** Rodapé do modal (ex: botões de ação). */
  footer?: ReactNode
  /** Largura máxima do modal. @default 'medium' */
  size?: ModalSize
  /** Fecha o modal ao clicar fora dele. @default true */
  closeOnOverlayClick?: boolean
  /** Fecha o modal ao pressionar a tecla Esc. @default true */
  closeOnEsc?: boolean
  className?: string
}
