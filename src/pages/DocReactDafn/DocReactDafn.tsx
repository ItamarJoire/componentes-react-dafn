import { Outlet } from 'react-router-dom'
import { DocsSidebar } from './DocsSidebar'
import styles from './DocReactDafn.module.scss'

export const DocReactDafn = () => (
  <div className={styles['layout']}>
    <DocsSidebar />
    <div className={styles['content']}>
      <Outlet />
    </div>
  </div>
)
