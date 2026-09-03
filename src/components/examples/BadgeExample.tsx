import { Badge } from '../../ui/Badge'

export const BadgeExample = () => {
  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge variant="danger" label="rel">
        Atrasado
      </Badge>
      <Badge variant="info" label="rel">
        Aguardando
      </Badge>
      <Badge variant="warning" label="rel">
        Em análise
      </Badge>
      <Badge variant="success" label="rel">
        Em conformidade
      </Badge>
    </div>
  )
}
