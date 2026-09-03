import { Button } from '../ui/Button'

export const ButtonExample = () => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primário</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="tertiary" href="#" target="_blank" ariaLabel="Ver documentação do gov.br Design System">
        Terciário
      </Button>
    </div>
  )
}
