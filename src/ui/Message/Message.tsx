import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faTriangleExclamation, faCircleXmark, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { MessageProps } from './types'
import styles from './Message.module.scss'

const variantIcon = {
  success: faCircleCheck,
  warning: faTriangleExclamation,
  error: faCircleXmark,
  info: faCircleInfo
}

const variantDefaultTitle = {
  success: 'Sucesso',
  warning: 'Atenção',
  error: 'Erro',
  info: 'Informação'
}

export const Message: React.FC<MessageProps> = ({ variant = 'info', title, children, onClose, className = '' }) => {
  const classes = `${styles['message']} ${styles[`message-${variant}`]}${className ? ` ${className}` : ''}`
  const resolvedTitle = title === undefined ? variantDefaultTitle[variant] : title

  return (
    <div className={classes} role="alert">
      <span className={styles['message-icon']}>
        <FontAwesomeIcon icon={variantIcon[variant]} />
      </span>

      <p className={styles['message-text']}>
        {resolvedTitle && <span className={styles['message-title']}>{resolvedTitle}. </span>}
        {children}
      </p>

      {onClose && (
        <button type="button" className={styles['message-close']} onClick={onClose} aria-label="Fechar mensagem">
          <FontAwesomeIcon icon={faXmark} />
        </button>
      )}
    </div>
  )
}
