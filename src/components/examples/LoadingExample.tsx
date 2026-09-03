import { Loading } from '../../ui/Loading'
import styles from './LoadingExample.module.scss'

export const LoadingExample = () => {
  return (
    <div className={styles['loading-example']}>
      <div className={styles['loading-example-item']}>
        <Loading size="small" />
      </div>

      <div className={styles['loading-example-item']}>
        <Loading />
      </div>

      <div className={styles['loading-example-item']}>
        <Loading size="large" label="Enviando arquivo ..." />
      </div>
    </div>
  )
}
