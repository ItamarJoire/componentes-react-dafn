import type { ReactNode } from 'react'

export interface RadioProps {
  /** Id do input. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: ReactNode
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  /** Nome do grupo nativo (inputs com o mesmo name formam um grupo exclusivo). */
  name?: string
  value?: string
  className?: string
}

export interface RadioOption {
  id: string
  label: string
  disabled?: boolean
}

export interface RadioGroupProps {
  label?: string
  /** Texto de apoio exibido abaixo do rótulo do grupo. */
  description?: string
  options: RadioOption[]
  /** Id da opção selecionada. */
  value: string
  onChange: (value: string) => void
  /** Nome compartilhado pelos inputs nativos do grupo. Gerado automaticamente se omitido. */
  name?: string
  className?: string
}
