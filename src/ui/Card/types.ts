import type { ReactNode } from 'react'

export interface CardProps {
  /** Imagem/ícone circular exibido no cabeçalho (ex: avatar do usuário). */
  avatar?: ReactNode
  /** Título principal do card. */
  title?: ReactNode
  /** Texto secundário exibido abaixo do título. */
  subtitle?: ReactNode
  /** Ação exibida no canto superior direito do cabeçalho (ex: botão de menu "⋮"). */
  headerAction?: ReactNode
  /** Área de mídia do card (ex: imagem, ilustração, placeholder). */
  media?: ReactNode
  /** Conteúdo principal/descrição do card. */
  children?: ReactNode
  /** Rodapé do card (ex: botão de ação e ícones). */
  footer?: ReactNode
  className?: string
}
