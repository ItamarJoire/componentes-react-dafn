import React, { useId } from 'react'
import type { SwitchProps } from './types'
import styles from './Switch.module.scss'

export const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  className = ''
}) => {
  const generatedId = useId()
  const switchId = id ?? generatedId

  return (
    <label
      htmlFor={switchId}
      className={`${styles['switch']}${disabled ? ` ${styles['is-disabled']}` : ''}${className ? ` ${className}` : ''}`}
    >
      {label && <span className={styles['switch-label']}>{label}</span>}
      <span className={`${styles['switch-track']}${checked ? ` ${styles['is-checked']}` : ''}`}>
        <input
          id={switchId}
          name={name}
          type="checkbox"
          role="switch"
          aria-checked={checked}
          checked={checked}
          disabled={disabled}
          onChange={event => onChange?.(event.target.checked)}
          className={styles['switch-input']}
        />
        <span className={styles['switch-thumb']} />
      </span>
    </label>
  )
}
