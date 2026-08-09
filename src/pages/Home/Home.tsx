import { PageTitle, Button } from '../../ui'
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
      </div>
    </div>
  )
}
