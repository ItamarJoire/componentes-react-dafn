import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { docNavCategories } from './navigation'
import { getDocComponentPath, paths } from '../../routes'
import styles from './DocsSidebar.module.scss'

export const DocsSidebar = () => {
  const [openIds, setOpenIds] = useState<string[]>(docNavCategories.map(category => category.id))

  const toggleCategory = (categoryId: string) => {
    setOpenIds(current =>
      current.includes(categoryId) ? current.filter(id => id !== categoryId) : [...current, categoryId]
    )
  }

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${styles['item-link']}${isActive ? ` ${styles['is-active']}` : ''}`

  return (
    <nav className={styles['sidebar']} aria-label="Navegação da documentação">
      <NavLink to={paths.docReactDafn} end className={navLinkClass}>
        Visão geral
      </NavLink>

      <NavLink
        to={paths.docReactDafnCleanup}
        className={({ isActive }) => `${styles['cleanup-link']}${isActive ? ` ${styles['is-active']}` : ''}`}
      >
        <FontAwesomeIcon icon={faTriangleExclamation} style={{ width: 14, height: 14 }} />
        Como remover
      </NavLink>

      <ul className={styles['groups']}>
        {docNavCategories.map(category => {
          const isOpen = openIds.includes(category.id)

          return (
            <li key={category.id} className={styles['group']}>
              <button
                type="button"
                className={styles['group-trigger']}
                aria-expanded={isOpen}
                onClick={() => toggleCategory(category.id)}
              >
                <span className={styles['group-label']}>{category.label}</span>
                <FontAwesomeIcon
                  icon={isOpen ? faChevronUp : faChevronDown}
                  className={styles['group-chevron']}
                  style={{ width: 12, height: 12 }}
                />
              </button>

              {isOpen && (
                <ul className={styles['items']}>
                  {category.items.map(item => (
                    <li key={item.slug}>
                      <NavLink to={getDocComponentPath(item.slug)} className={navLinkClass}>
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
