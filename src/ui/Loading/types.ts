export type LoadingSize = 'small' | 'medium' | 'large'

export interface LoadingProps {
  /** Texto exibido abaixo do spinner. @default 'Carregando ...' */
  label?: string
  /** Tamanho do spinner. @default 'medium' */
  size?: LoadingSize
  className?: string
}
