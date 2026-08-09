import { Accordion, PageTitle } from '../../ui'
import { loginFaqItems } from './defaultData'
import styles from './Login.module.scss'

export const Login = () => {
  return (
    <div className={styles['login']}>
      <PageTitle title="Login" />

      <h3>Perguntas frequentes</h3>

      <Accordion items={loginFaqItems} interactive={false} columns={3} />
    </div>
  )
}
