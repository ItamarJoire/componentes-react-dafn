import type { DocPropInfo } from './types'
import styles from './PropsTable.module.scss'

interface PropsTableProps {
  props: DocPropInfo[]
}

export const PropsTable = ({ props }: PropsTableProps) => (
  <div className={styles['wrapper']}>
    <table className={styles['table']}>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Tipo</th>
          <th>Obrigatório</th>
          <th>Padrão</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {props.map(prop => (
          <tr key={prop.name}>
            <td>
              <code>{prop.name}</code>
            </td>
            <td>
              <code>{prop.type}</code>
            </td>
            <td>{prop.required ? 'Sim' : 'Não'}</td>
            <td>{prop.defaultValue === null ? '—' : <code>{prop.defaultValue || "''"}</code>}</td>
            <td>{prop.description || '—'}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)
