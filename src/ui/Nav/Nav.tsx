import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { NavProps } from './types'
import styles from './Nav.module.scss'

export const Nav: React.FC<NavProps> = ({ links, ariaLabel = 'Menu institucional' }) => {
  const [openId, setOpenId] = useState<string | null>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className={styles['nav']} aria-label={ariaLabel} ref={navRef}>
      <ul>
        {links.map(link =>
          link.dropdownItems ? (
            <li key={link.id} className={`${styles['nav-item']} ${styles['nav-item-dropdown']}`}>
              <a
                type="button"
                className={styles['nav-link']}
                aria-expanded={openId === link.id}
                onClick={() => setOpenId(current => (current === link.id ? null : link.id))}
              >
                {link.label}
                <FontAwesomeIcon icon={faChevronDown} className={styles['nav-link-icon']} />
              </a>
              {openId === link.id && (
                <ul className={styles['nav-dropdown']}>
                  {link.dropdownItems.map(item => (
                    <li key={item.id}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.id} className={styles['nav-item']}>
              <a className={styles['nav-link']} href={link.href}>
                {link.label}
              </a>
            </li>
          )
        )}
      </ul>
    </nav>
  )
}
