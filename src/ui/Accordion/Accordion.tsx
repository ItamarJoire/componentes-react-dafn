import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { AccordionProps } from './types'
import styles from './Accordion.module.scss'

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
  interactive = true,
  columns = 1,
  className = ''
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds)

  const toggle = (id: string) => {
    setOpenIds(current => {
      if (current.includes(id)) return current.filter(openId => openId !== id)
      return allowMultiple ? [...current, id] : [id]
    })
  }

  const staticModifier = !interactive ? ` ${styles['is-static']}` : ''
  const gridModifier = columns > 1 ? ` ${styles['is-grid']}` : ''

  return (
    <div
      className={`${styles['accordion']}${staticModifier}${gridModifier}${className ? ` ${className}` : ''}`}
      style={columns > 1 ? { gridTemplateColumns: `repeat(${columns}, 1fr)` } : undefined}
    >
      {items.map(item => {
        const isOpen = !interactive || openIds.includes(item.id)
        const panelId = `accordion-panel-${item.id}`

        return (
          <div key={item.id} className={`${styles['accordion-item']}${staticModifier}`}>
            {interactive ? (
              <button
                type="button"
                className={styles['accordion-trigger']}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`${styles['accordion-icon']}${isOpen ? ` ${styles['is-open']}` : ''}`}
                />
                <span className={styles['accordion-title']}>{item.title}</span>
              </button>
            ) : (
              <div className={styles['accordion-trigger']}>
                <span className={styles['accordion-title']}>{item.title}</span>
              </div>
            )}

            {isOpen && (
              <div id={panelId} className={styles['accordion-panel']}>
                {item.content}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
