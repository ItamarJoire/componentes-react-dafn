import { PageTitle, Button } from '../../ui'
import { paths } from '../../routes'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles['home']}>
      <PageTitle title="Página principal" />
      <div className={styles['hero']}>
        <h1>Componentes-dafn</h1>
        <p className={styles['hero-text']}>
          Base de componentes React + TypeScript + Vite, construída <br />
          sobre os tokens do gov.br Design System.
        </p>
        <div className={styles['actions']}>
          <Button
            variant="tertiary"
            href="https://itamarjoire.github.io/doc-dafn/"
            target="_blank"
            ariaLabel="Ver documentação do gov.br Design System"
          >
            Ver documentação
          </Button>
        </div>

        <div className={styles['routes']}>
          <p className={styles['routes-title']}>Rotas do projeto</p>
          <ul className={styles['routes-list']}>
            <li>
              <a className={styles['login-link']} href={paths.login}>
                Login ({paths.login})
              </a>
            </li>
            <li>
              <a className={styles['login-link']} href="/rota-inexistente">
                Página não encontrada (404)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
