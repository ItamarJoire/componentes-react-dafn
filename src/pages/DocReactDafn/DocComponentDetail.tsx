import { Navigate, useParams } from 'react-router-dom'
import { PageTitle } from '../../ui'
import { paths } from '../../routes'
import { docsManifest } from './manifest.generated'
import { exampleRegistry } from './exampleRegistry'
import { findDocNavItemBySlug } from './navigation'
import { PropsTable } from './PropsTable'
import styles from './DocComponentDetail.module.scss'

export const DocComponentDetail = () => {
  const { slug } = useParams<{ slug: string }>()
  const navItem = findDocNavItemBySlug(slug)

  if (!navItem) {
    return <Navigate to={paths.docReactDafn} replace />
  }

  const doc = docsManifest[navItem.componentName]
  const Example = exampleRegistry[navItem.componentName]

  return (
    <div className={styles['detail']}>
      <PageTitle title={navItem.label} />

      <h1>{navItem.label}</h1>
      {doc?.description && <p className={styles['description']}>{doc.description}</p>}

      <section className={styles['section']}>
        <h2>Exemplo</h2>
        {Example ? (
          <div className={styles['example']}>
            <Example />
          </div>
        ) : (
          <p className={styles['empty']}>Sem exemplo interativo disponível para este componente.</p>
        )}
      </section>

      <section className={styles['section']}>
        <h2>Propriedades</h2>
        {doc && doc.props.length > 0 ? (
          <PropsTable props={doc.props} />
        ) : (
          <p className={styles['empty']}>Este componente não recebe propriedades.</p>
        )}
      </section>
    </div>
  )
}
