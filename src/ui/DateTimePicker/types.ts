export interface DateTimePickerProps {
  /** Id do campo. Se não informado, é gerado automaticamente (usado para ligar label + input). */
  id?: string
  label?: string
  value: Date | null
  onChange: (date: Date | null) => void
  /** @default 'dd/mm/aaaa --:--' */
  placeholder?: string
  /** Texto de ajuda exibido abaixo do campo. */
  helperText?: string
  disabled?: boolean
  required?: boolean
  name?: string
  /** Datas anteriores a esta ficam desabilitadas no calendário. */
  minDate?: Date
  /** Datas posteriores a esta ficam desabilitadas no calendário. */
  maxDate?: Date
  className?: string
}
