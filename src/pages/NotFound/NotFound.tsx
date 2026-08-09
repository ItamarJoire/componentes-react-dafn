import { Button, PageTitle } from '../../ui'
import error01 from '../../assets/error01.png'
import styles from './NotFound.module.scss'

export const NotFound = () => {
  return (
    <div className={styles['not-found']}>
      <PageTitle title="Página não encontrada" />
      <img src={error01} alt="" className={styles['illustration']} width={320} height={320} />
      <h1>Página não encontrada</h1>
      <p>A página que você está procurando não existe, foi removida ou está temporariamente indisponível.</p>
      <Button href="/" className={styles['home-link']}>
        Voltar para a página principal
      </Button>
    </div>
  )
}
