import React from 'react'
import type { ListProps } from './types'
import styles from './List.module.scss'

export const List: React.FC<ListProps> = ({ items, density = 'medium', className = '' }) => {
  const classes = `${styles['list']} ${styles[`list-${density}`]}${className ? ` ${className}` : ''}`

  return (
    <ul className={classes}>
      {items.map(item => {
        const content = (
          <>
            {item.icon && <span className={styles['list-item-icon']}>{item.icon}</span>}
            <span className={styles['list-item-title']}>{item.title}</span>
            {item.meta && <span className={styles['list-item-meta']}>{item.meta}</span>}
          </>
        )

        return (
          <li key={item.id} className={styles['list-item']}>
            {item.onClick ? (
              <button
                type="button"
                className={`${styles['list-item-content']} ${styles['is-interactive']}`}
                onClick={item.onClick}
              >
                {content}
              </button>
            ) : (
              <div className={styles['list-item-content']}>{content}</div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
