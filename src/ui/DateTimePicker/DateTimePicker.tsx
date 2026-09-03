import React, { useEffect, useId, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { CalendarPanel } from '../Datepicker/CalendarPanel'
import { TimePanel } from '../Timepicker/TimePanel'
import type { DateTimePickerProps } from './types'
import styles from './DateTimePicker.module.scss'

const pad = (value: number) => String(value).padStart(2, '0')

const formatDateTime = (date: Date) =>
  `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`

const formatDateTimeInput = (raw: string) => {
  const digits = raw.replace(/\D/g, '').slice(0, 12)
  let formatted = ''
  if (digits.length > 0) formatted += digits.slice(0, 2)
  if (digits.length > 2) formatted += `/${digits.slice(2, 4)}`
  if (digits.length > 4) formatted += `/${digits.slice(4, 8)}`
  if (digits.length > 8) formatted += ` ${digits.slice(8, 10)}`
  if (digits.length > 10) formatted += `:${digits.slice(10, 12)}`
  return formatted
}

const parseDateTimeInput = (formatted: string): Date | null => {
  const match = formatted.match(/^(\d{2})\/(\d{2})\/(\d{4}) (\d{2}):(\d{2})$/)
  if (!match) return null

  const day = Number(match[1])
  const month = Number(match[2])
  const year = Number(match[3])
  const hours = Number(match[4])
  const minutes = Number(match[5])
  if (hours > 23 || minutes > 59) return null

  const date = new Date(year, month - 1, day, hours, minutes)
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) return null

  return date
}

export const DateTimePicker: React.FC<DateTimePickerProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder = 'dd/mm/aaaa --:--',
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
  const [text, setText] = useState(value ? formatDateTime(value) : '')
  const [viewDate, setViewDate] = useState(value ?? new Date())

  useEffect(() => {
    setText(value ? formatDateTime(value) : '')
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
    const formatted = formatDateTimeInput(event.target.value)
    setText(formatted)

    if (formatted === '') {
      onChange(null)
      return
    }

    const parsed = parseDateTimeInput(formatted)
    if (parsed) {
      onChange(parsed)
      setViewDate(parsed)
    }
  }

  const handleSelectDate = (date: Date) => {
    const base = value ?? new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0)
    const next = new Date(date.getFullYear(), date.getMonth(), date.getDate(), base.getHours(), base.getMinutes())
    onChange(next)
    setText(formatDateTime(next))
    setViewDate(next)
  }

  const handleTimeChange = (hours: number, minutes: number) => {
    const base = value ?? viewDate
    const next = new Date(base.getFullYear(), base.getMonth(), base.getDate(), hours, minutes)
    onChange(next)
    setText(formatDateTime(next))
  }

  return (
    <div ref={containerRef} className={`${styles['datetimepicker']}${className ? ` ${className}` : ''}`}>
      {label && (
        <label className={styles['datetimepicker-label']} htmlFor={inputId}>
          {label}
          {required && <span className={styles['datetimepicker-required']}> *</span>}
        </label>
      )}

      <div className={styles['datetimepicker-wrapper']}>
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
          className={styles['datetimepicker-action']}
          onClick={() => !disabled && setIsOpen(current => !current)}
          disabled={disabled}
          aria-label="Abrir calendário e horário"
        >
          <FontAwesomeIcon icon={faCalendar} style={{ width: 16, height: 16 }} />
        </button>

        {isOpen && (
          <div className={styles['datetimepicker-panel']}>
            <CalendarPanel
              viewDate={viewDate}
              selectedDate={value}
              onSelectDate={handleSelectDate}
              onViewDateChange={setViewDate}
              minDate={minDate}
              maxDate={maxDate}
            />

            <div className={styles['datetimepicker-divider']} />

            <TimePanel hours={value?.getHours() ?? 0} minutes={value?.getMinutes() ?? 0} onChange={handleTimeChange} />
          </div>
        )}
      </div>

      {helperText && <p className={styles['datetimepicker-helper']}>{helperText}</p>}
    </div>
  )
}
