import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { List } from '../ui/List'
import type { ListItem } from '../ui/List'
import styles from './ListExample.module.scss'

const items: ListItem[] = [
  { id: '1', icon: <FontAwesomeIcon icon={faHeart} />, title: 'Texto principal', meta: 'meta' },
  { id: '2', icon: <FontAwesomeIcon icon={faHeart} />, title: 'Texto principal', meta: 'meta' },
  { id: '3', icon: <FontAwesomeIcon icon={faHeart} />, title: 'Texto principal', meta: 'meta' }
]

export const ListExample = () => {
  return (
    <div className={styles['list-example']}>
      <div className={styles['list-example-item']}>
        <p className={styles['list-example-label']}>Alta densidade</p>
        <List items={items} density="high" />
      </div>

      <div className={styles['list-example-item']}>
        <p className={styles['list-example-label']}>Média densidade</p>
        <List items={items} density="medium" />
      </div>

      <div className={styles['list-example-item']}>
        <p className={styles['list-example-label']}>Baixa densidade</p>
        <List items={items} density="low" />
      </div>
    </div>
  )
}
