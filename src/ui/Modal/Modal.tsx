import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import type { ModalProps } from './types'
import styles from './Modal.module.scss'

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'medium',
  closeOnOverlayClick = true,
  closeOnEsc = true,
  className = ''
}) => {
  useEffect(() => {
    if (!open || !closeOnEsc) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, closeOnEsc, onClose])

  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  if (!open) return null

  const classes = `${styles['modal']} ${styles[`modal-${size}`]}${className ? ` ${className}` : ''}`

  return createPortal(
    <div className={styles['modal-overlay']} onClick={closeOnOverlayClick ? onClose : undefined}>
      <div
        className={classes}
        role="dialog"
        aria-modal="true"
        aria-label={typeof title === 'string' ? title : undefined}
        onClick={event => event.stopPropagation()}
      >
        {title !== undefined && (
          <div className={styles['modal-header']}>
            <h3 className={styles['modal-title']}>{title}</h3>
            <button type="button" className={styles['modal-close']} onClick={onClose} aria-label="Fechar">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>
        )}

        {children && <div className={styles['modal-body']}>{children}</div>}

        {footer && <div className={styles['modal-footer']}>{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
