import type { ReactNode } from 'react'

export interface SwitchProps {
  /** Id do input. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: ReactNode
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  className?: string
}
