import type { ReactNode } from 'react'

export interface CheckboxProps {
  /** Id do input. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: ReactNode
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  name?: string
  className?: string
}

export interface CheckboxOption {
  id: string
  label: string
  disabled?: boolean
}

export interface CheckboxGroupProps {
  label?: string
  /** Texto de apoio exibido abaixo do rótulo do grupo. */
  description?: string
  options: CheckboxOption[]
  /** Ids das opções selecionadas. */
  value: string[]
  onChange: (value: string[]) => void
  /** Exibe o item "Selecionar Todos" no topo da lista. @default true */
  showSelectAll?: boolean
  selectAllLabel?: string
  className?: string
}
