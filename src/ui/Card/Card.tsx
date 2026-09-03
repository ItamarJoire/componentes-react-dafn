import React from 'react'
import type { CardProps } from './types'
import styles from './Card.module.scss'

export const Card: React.FC<CardProps> = ({
  avatar,
  title,
  subtitle,
  headerAction,
  media,
  children,
  footer,
  className = ''
}) => {
  const classes = `${styles['card']}${className ? ` ${className}` : ''}`
  const hasHeader = avatar || title || subtitle || headerAction

  return (
    <div className={classes}>
      {hasHeader && (
        <div className={styles['card-header']}>
          {avatar && <div className={styles['card-avatar']}>{avatar}</div>}

          {(title || subtitle) && (
            <div className={styles['card-heading']}>
              {title && <h3 className={styles['card-title']}>{title}</h3>}
              {subtitle && <p className={styles['card-subtitle']}>{subtitle}</p>}
            </div>
          )}

          {headerAction && <div className={styles['card-header-action']}>{headerAction}</div>}
        </div>
      )}

      {media && <div className={styles['card-media']}>{media}</div>}

      {children && <div className={styles['card-body']}>{children}</div>}

      {footer && <div className={styles['card-footer']}>{footer}</div>}
    </div>
  )
}
