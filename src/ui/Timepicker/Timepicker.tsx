import React, { useEffect, useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { TimePanel } from './TimePanel'
import type { TimepickerProps, TimeValue } from './types'
import styles from './Timepicker.module.scss'

const pad = (value: number) => String(value).padStart(2, '0')

const formatTime = (value: TimeValue) => `${pad(value.hours)}:${pad(value.minutes)}`

const formatTimeInput = (raw: string) => {
  const digits = raw.replace(/\D/g, '').slice(0, 4)
  if (digits.length <= 2) return digits
  return `${digits.slice(0, 2)}:${digits.slice(2)}`
}

const parseTimeInput = (formatted: string): TimeValue | null => {
  const match = formatted.match(/^(\d{2}):(\d{2})$/)
  if (!match) return null

  const hours = Number(match[1])
  const minutes = Number(match[2])
  if (hours > 23 || minutes > 59) return null

  return { hours, minutes }
}

export const Timepicker: React.FC<TimepickerProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = '--:--',
  helperText,
  disabled = false,
  required = false,
  name,
  className = ''
}) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const containerRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(value ? formatTime(value) : '')

  useEffect(() => {
    setText(value ? formatTime(value) : '')
  }, [value])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatTimeInput(event.target.value)
    setText(formatted)

    const parsed = parseTimeInput(formatted)
    if (parsed) onChange(parsed)
  }

  const handlePanelChange = (hours: number, minutes: number) => {
    onChange({ hours, minutes })
  }

  const current = value ?? { hours: 0, minutes: 0 }

  return (
    <div ref={containerRef} className={`${styles['timepicker']}${className ? ` ${className}` : ''}`}>
      {label && (
        <label className={styles['timepicker-label']} htmlFor={inputId}>
          {label}
          {required && <span className={styles['timepicker-required']}> *</span>}
        </label>
      )}

      <div className={styles['timepicker-wrapper']}>
        <input
          id={inputId}
          name={name}
          type="text"
          inputMode="numeric"
          value={text}
          onChange={handleTextChange}
          onFocus={() => !disabled && setIsOpen(true)}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          autoComplete="off"
        />

        <button
          type="button"
          className={styles['timepicker-action']}
          onClick={() => !disabled && setIsOpen(current => !current)}
          disabled={disabled}
          aria-label="Abrir seletor de horário"
        >
          <FontAwesomeIcon icon={faClock} style={{ width: 16, height: 16 }} />
        </button>

        {isOpen && (
          <div className={styles['timepicker-panel']}>
            <TimePanel hours={current.hours} minutes={current.minutes} onChange={handlePanelChange} />
          </div>
        )}
      </div>

      {helperText && <p className={styles['timepicker-helper']}>{helperText}</p>}
    </div>
  )
}
