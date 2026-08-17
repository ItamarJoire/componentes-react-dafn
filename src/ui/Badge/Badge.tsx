import React from 'react'
import type { BadgeProps } from './types'
import styles from './Badge.module.scss'

export const Badge: React.FC<BadgeProps> = ({ variant = 'info', label, children, className = '' }) => {
  const classes = `${styles['badge']} ${styles[`badge-${variant}`]}${className ? ` ${className}` : ''}`

  return (
    <span className={classes}>
      {label && <span className={styles['badge-label']}>{label}: </span>}
      <span className={styles['badge-text']}>{children}</span>
    </span>
  )
}
