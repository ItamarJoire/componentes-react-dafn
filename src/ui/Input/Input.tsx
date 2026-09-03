import React, { useEffect, useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEye,
  faEyeSlash,
  faChevronDown,
  faCircleExclamation,
  faTriangleExclamation,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons'
import type { InputProps } from './types'
import styles from './Input.module.scss'

const statusIcon = {
  success: faCircleCheck,
  warning: faTriangleExclamation,
  error: faCircleExclamation,
  default: null
}

const formatPhone = (rawValue: string) => {
  const digits = rawValue.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 2) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

const formatCPF = (rawValue: string) => {
  const digits = rawValue.replace(/\D/g, '').slice(0, 11)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`
}

export const Input: React.FC<InputProps> = ({
  id,
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  helperText,
  status = 'default',
  message,
  icon,
  options = [],
  disabled = false,
  required = false,
  name,
  rows = 4,
  className = ''
}) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const [showPassword, setShowPassword] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)
  const [selectWidth, setSelectWidth] = useState<number>()

  useEffect(() => {
    if (type !== 'dropdown' || !selectRef.current) return

    const el = selectRef.current
    const updateWidth = () => setSelectWidth(el.offsetWidth)
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(el)
    return () => observer.disconnect()
  }, [type])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (type === 'tel') {
      onChange(formatPhone(event.target.value))
    } else if (type === 'cpf') {
      onChange(formatCPF(event.target.value))
    } else {
      onChange(event.target.value)
    }
  }

  const wrapperClasses = [
    styles['input-wrapper'],
    styles[`input-wrapper-${status}`],
    disabled ? styles['input-wrapper-disabled'] : ''
  ]
    .filter(Boolean)
    .join(' ')

  const currentStatusIcon = statusIcon[status]

  return (
    <div className={`${styles['input']}${className ? ` ${className}` : ''}`}>
      {label && (
        <label className={styles['input-label']} htmlFor={inputId}>
          {label}
          {required && <span className={styles['input-required']}> *</span>}
        </label>
      )}

      <div className={wrapperClasses}>
        {icon && <span className={styles['input-icon']}>{icon}</span>}

        {type === 'textarea' ? (
          <textarea
            id={inputId}
            name={name}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            rows={rows}
          />
        ) : type === 'dropdown' ? (
          <select
            ref={selectRef}
            id={inputId}
            name={name}
            value={value}
            onChange={handleChange}
            disabled={disabled}
            required={required}
            style={selectWidth ? { width: selectWidth } : undefined}
          >
            <option value="" disabled hidden>
              {placeholder ?? 'Selecione'}
            </option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={inputId}
            name={name}
            type={type === 'password' ? (showPassword ? 'text' : 'password') : type === 'cpf' ? 'text' : type}
            inputMode={type === 'tel' || type === 'cpf' ? (type === 'tel' ? 'tel' : 'numeric') : undefined}
            maxLength={type === 'cpf' ? 14 : undefined}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
          />
        )}

        {type === 'password' && (
          <button
            type="button"
            className={styles['input-action']}
            onClick={() => setShowPassword(current => !current)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
            disabled={disabled}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} style={{ width: 16, height: 16 }} />
          </button>
        )}

        {type === 'dropdown' && (
          <span className={styles['input-caret']}>
            <FontAwesomeIcon icon={faChevronDown} style={{ width: 16, height: 16 }} />
          </span>
        )}
      </div>

      {message ? (
        <p className={`${styles['input-message']} ${styles[`input-message-${status}`]}`}>
          {currentStatusIcon && <FontAwesomeIcon icon={currentStatusIcon} style={{ width: 16, height: 16 }} />}
          {message}
        </p>
      ) : (
        helperText && <p className={styles['input-helper']}>{helperText}</p>
      )}
    </div>
  )
}
