import React, { useEffect, useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { CalendarPanel } from './CalendarPanel'
import type { DatepickerProps } from './types'
import styles from './Datepicker.module.scss'

const pad = (value: number) => String(value).padStart(2, '0')

const formatDate = (date: Date) => `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`

const formatDateInput = (raw: string) => {
  const digits = raw.replace(/\D/g, '').slice(0, 8)
  if (digits.length <= 2) return digits
  if (digits.length <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`
}

const parseDateInput = (formatted: string): Date | null => {
  const match = formatted.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)
  if (!match) return null

  const day = Number(match[1])
  const month = Number(match[2])
  const year = Number(match[3])
  const date = new Date(year, month - 1, day)

  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null
  return date
}

export const Datepicker: React.FC<DatepickerProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = 'dd/mm/aaaa',
  helperText,
  disabled = false,
  required = false,
  name,
  minDate,
  maxDate,
  className = ''
}) => {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const containerRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [text, setText] = useState(value ? formatDate(value) : '')
  const [viewDate, setViewDate] = useState(value ?? new Date())

  useEffect(() => {
    setText(value ? formatDate(value) : '')
    if (value) setViewDate(value)
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
    const formatted = formatDateInput(event.target.value)
    setText(formatted)

    if (formatted === '') {
      onChange(null)
      return
    }

    const parsed = parseDateInput(formatted)
    if (parsed) {
      onChange(parsed)
      setViewDate(parsed)
    }
  }

  const handleSelectDate = (date: Date) => {
    onChange(date)
    setText(formatDate(date))
    setViewDate(date)
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className={`${styles['datepicker']}${className ? ` ${className}` : ''}`}>
      {label && (
        <label className={styles['datepicker-label']} htmlFor={inputId}>
          {label}
          {required && <span className={styles['datepicker-required']}> *</span>}
        </label>
      )}

      <div className={styles['datepicker-wrapper']}>
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
          className={styles['datepicker-action']}
          onClick={() => !disabled && setIsOpen(current => !current)}
          disabled={disabled}
          aria-label="Abrir calendário"
        >
          <FontAwesomeIcon icon={faCalendar} style={{ width: 16, height: 16 }} />
        </button>

        {isOpen && (
          <div className={styles['datepicker-panel']}>
            <CalendarPanel
              viewDate={viewDate}
              selectedDate={value}
              onSelectDate={handleSelectDate}
              onViewDateChange={setViewDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        )}
      </div>

      {helperText && <p className={styles['datepicker-helper']}>{helperText}</p>}
    </div>
  )
}
