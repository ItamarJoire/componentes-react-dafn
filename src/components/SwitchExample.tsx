import { useState } from 'react'
import { Switch } from '../ui/Switch'

export const SwitchExample = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Switch label="Label" checked={enabled} onChange={setEnabled} />
      <Switch label="Label" checked disabled />
      <Switch label="Label" checked={false} disabled />
    </div>
  )
}
