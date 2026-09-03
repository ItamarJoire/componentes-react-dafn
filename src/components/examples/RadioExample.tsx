import { useState } from 'react'
import { RadioGroup } from '../../ui/Radio'

export const RadioExample = () => {
  const [selected, setSelected] = useState('opcao-2')

  return (
    <RadioGroup
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
