import React, { useId } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import type { CheckboxProps } from './types'
import styles from './Checkbox.module.scss'

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  label,
  checked = false,
  onChange,
  disabled = false,
  name,
  className = ''
}) => {
  const generatedId = useId()
  const checkboxId = id ?? generatedId

  return (
    <label
      htmlFor={checkboxId}
      className={`${styles['checkbox']}${disabled ? ` ${styles['is-disabled']}` : ''}${className ? ` ${className}` : ''}`}
    >
      <span className={styles['checkbox-input-wrapper']}>
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={event => onChange?.(event.target.checked)}
          className={styles['checkbox-input']}
        />
        <span className={`${styles['checkbox-box']}${checked ? ` ${styles['is-checked']}` : ''}`}>
          {checked && <FontAwesomeIcon icon={faCheck} className={styles['checkbox-icon']} />}
        </span>
      </span>
      {label && <span className={styles['checkbox-label']}>{label}</span>}
    </label>
  )
}
