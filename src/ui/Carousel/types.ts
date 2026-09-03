import type { ReactNode } from 'react'

export interface CarouselItem {
  id: string
  content: ReactNode
}

export interface CarouselProps {
  items: CarouselItem[]
  /** Índice do slide exibido inicialmente. @default 0 */
  defaultActiveIndex?: number
  /** Avança os slides automaticamente. @default false */
  autoPlay?: boolean
  /** Intervalo em milissegundos entre trocas automáticas de slide. @default 5000 */
  autoPlayInterval?: number
  /** Exibe as setas de navegação. @default true */
  showArrows?: boolean
  /** Exibe os indicadores (dots) de slide. @default true */
  showDots?: boolean
  /** Número de itens exibidos simultaneamente na viewport. @default 1 */
  itemsPerView?: number
  /** Espaçamento em pixels entre os itens quando itemsPerView > 1. @default 16 */
  gap?: number
  /** Permite navegar arrastando com o mouse ou por gestos de toque. @default true */
  swipeable?: boolean
  className?: string
}
