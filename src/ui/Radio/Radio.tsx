import React, { useId } from 'react'
import type { RadioProps } from './types'
import styles from './Radio.module.scss'

export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  value,
  className = ''
}) => {
  const generatedId = useId()
  const radioId = id ?? generatedId

  return (
    <label
      htmlFor={radioId}
      className={`${styles['radio']}${disabled ? ` ${styles['is-disabled']}` : ''}${className ? ` ${className}` : ''}`}
    >
      <span className={styles['radio-input-wrapper']}>
        <input
          id={radioId}
          name={name}
          type="radio"
          value={value}
          checked={checked}
          disabled={disabled}
          onChange={event => onChange?.(event.target.checked)}
          className={styles['radio-input']}
        />
        <span className={`${styles['radio-circle']}${checked ? ` ${styles['is-checked']}` : ''}`} />
      </span>
      {label && <span className={styles['radio-label']}>{label}</span>}
    </label>
  )
}
