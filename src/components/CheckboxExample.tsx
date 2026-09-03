import { useState } from 'react'
import { CheckboxGroup } from '../ui/Checkbox'

export const CheckboxExample = () => {
  const [selected, setSelected] = useState<string[]>(['opcao-2', 'opcao-3'])

  return (
    <CheckboxGroup
      options={[
        { id: 'opcao-1', label: 'Texto descritivo opção 001' },
        { id: 'opcao-2', label: 'Texto descritivo opção 002' },
        { id: 'opcao-3', label: 'Texto descritivo opção 003' }
      ]}
      value={selected}
      onChange={setSelected}
    />
  )
}
