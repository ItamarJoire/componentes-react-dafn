import type { ReactNode } from 'react'

export interface StepItem {
  id: string
  label: ReactNode
}

export type StepStatus = 'completed' | 'current' | 'pending'

export interface StepProps {
  steps: StepItem[]
  /** Número (1-based) da etapa atual. Etapas anteriores ficam concluídas (check verde), a atual em azul e as seguintes pendentes (opacas). */
  currentStep: number
  /** Chamado com o número (1-based) da etapa clicada. Quando informado, os círculos viram clicáveis. */
  onStepClick?: (stepNumber: number) => void
  className?: string
}
