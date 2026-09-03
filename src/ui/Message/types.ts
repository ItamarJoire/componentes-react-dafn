import type { ReactNode } from 'react'

export type MessageVariant = 'success' | 'warning' | 'error' | 'info'

export interface MessageProps {
  /** Variante visual e semântica da mensagem. @default 'info' */
  variant?: MessageVariant
  /** Palavra de destaque exibida em negrito no início da mensagem. Quando omitida, usa um rótulo padrão de acordo com a variante; passe '' para ocultar. */
  title?: string
  children: ReactNode
  /** Exibe o botão de fechar e é chamado ao clicar nele. */
  onClose?: () => void
  className?: string
}
