import { Link } from 'react-router-dom'
import { PageTitle } from '../../ui'
import { docNavCategories } from './navigation'
import { getDocComponentPath } from '../../routes'
import styles from './DocOverview.module.scss'

export const DocOverview = () => (
  <div className={styles['overview']}>
    <PageTitle title="Documentação DAFN" />

    <h1>Documentação DAFN</h1>
    <p>
      Referência dos componentes de UI deste template: variantes, propriedades e um exemplo de uso para cada um.
      As tabelas de propriedades são geradas automaticamente a partir dos arquivos <code>types.ts</code> em{' '}
      <code>src/ui</code> — remova esta rota quando o projeto não precisar mais dela.
    </p>

    {docNavCategories.map(category => (
      <section key={category.id} className={styles['category']}>
        <h2>{category.label}</h2>
        <ul className={styles['grid']}>
          {category.items.map(item => (
            <li key={item.slug}>
              <Link to={getDocComponentPath(item.slug)} className={styles['card']}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    ))}
  </div>
)
