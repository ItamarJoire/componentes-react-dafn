export interface TimeValue {
  hours: number
  minutes: number
}

export interface TimepickerProps {
  /** Id do campo. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: string
  value: TimeValue | null
  onChange: (value: TimeValue) => void
  /** @default '--:--' */
  placeholder?: string
  /** Texto de ajuda exibido abaixo do campo. */
  helperText?: string
  disabled?: boolean
  required?: boolean
  name?: string
  className?: string
}

export interface TimePanelProps {
  hours: number
  minutes: number
  onChange: (hours: number, minutes: number) => void
}
