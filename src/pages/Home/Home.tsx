import { PageTitle } from '../../ui'
import { paths } from '../../routes'
import styles from './Home.module.scss'
import { ComponentsShowcase } from '../../components'

export const Home = () => {
  return (
    <>
      <PageTitle title="Página principal" />

      <div className={styles['routes']}>
        <p className={styles['routes-title']}>Rotas do projeto</p>
        <ul className={styles['routes-list']}>
          <li>
            <a className={styles['login-link']} href={paths.login}>
              Login ({paths.login})
            </a>
          </li>
          <li>
            <a className={styles['login-link']} href={paths.docReactDafn}>
              Documentação DAFN ({paths.docReactDafn})
            </a>
          </li>
          <li>
            <a className={styles['login-link']} href="/rota-inexistente">
              Página não encontrada (404)
            </a>
          </li>
        </ul>
      </div>

      <div className={styles['examples']}>
        <ComponentsShowcase />
      </div>
    </>
  )
}
