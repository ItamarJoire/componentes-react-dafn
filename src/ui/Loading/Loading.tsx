import React from 'react'
import type { LoadingProps } from './types'
import styles from './Loading.module.scss'

export const Loading: React.FC<LoadingProps> = ({ label = 'Carregando ...', size = 'medium', className = '' }) => {
  const classes = `${styles['loading']}${className ? ` ${className}` : ''}`

  return (
    <div className={classes} role="status" aria-live="polite">
      <span className={`${styles['loading-spinner']} ${styles[`loading-spinner-${size}`]}`} />
      {label && <span className={styles['loading-label']}>{label}</span>}
    </div>
  )
}
