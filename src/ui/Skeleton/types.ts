import type { CSSProperties } from 'react'

export type SkeletonVariant = 'text' | 'circle' | 'rect'

export interface SkeletonProps {
  /** Formato do skeleton. Padrão: 'text'. */
  variant?: SkeletonVariant
  width?: number | string
  height?: number | string
  /** Quantidade de linhas repetidas (aplica-se principalmente ao variant 'text'). */
  count?: number
  className?: string
  style?: CSSProperties
}
