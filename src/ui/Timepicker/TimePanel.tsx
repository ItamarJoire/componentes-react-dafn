import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import type { TimePanelProps } from './types'
import styles from './Timepicker.module.scss'

const pad = (value: number) => String(value).padStart(2, '0')

const wrap = (value: number, max: number) => ((value % (max + 1)) + (max + 1)) % (max + 1)

export const TimePanel: React.FC<TimePanelProps> = ({ hours, minutes, onChange }) => {
  const setHours = (next: number) => onChange(wrap(next, 23), minutes)
  const setMinutes = (next: number) => onChange(hours, wrap(next, 59))

  const handleHoursInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 2)
    if (digits === '') return
    setHours(Number(digits))
  }

  const handleMinutesInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 2)
    if (digits === '') return
    setMinutes(Number(digits))
  }

  return (
    <div className={styles['time-panel']}>
      <div className={styles['time-field']}>
        <button
          type="button"
          className={styles['time-arrow']}
          onClick={() => setHours(hours + 1)}
          aria-label="Aumentar hora"
        >
          <FontAwesomeIcon icon={faChevronUp} style={{ width: 12, height: 12 }} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          className={styles['time-input']}
          value={pad(hours)}
          onChange={handleHoursInput}
          aria-label="Hora"
        />
        <button
          type="button"
          className={styles['time-arrow']}
          onClick={() => setHours(hours - 1)}
          aria-label="Diminuir hora"
        >
          <FontAwesomeIcon icon={faChevronDown} style={{ width: 12, height: 12 }} />
        </button>
      </div>

      <span className={styles['time-separator']}>:</span>

      <div className={styles['time-field']}>
        <button
          type="button"
          className={styles['time-arrow']}
          onClick={() => setMinutes(minutes + 1)}
          aria-label="Aumentar minuto"
        >
          <FontAwesomeIcon icon={faChevronUp} style={{ width: 12, height: 12 }} />
        </button>
        <input
          type="text"
          inputMode="numeric"
          className={styles['time-input']}
          value={pad(minutes)}
          onChange={handleMinutesInput}
          aria-label="Minuto"
        />
        <button
          type="button"
          className={styles['time-arrow']}
          onClick={() => setMinutes(minutes - 1)}
          aria-label="Diminuir minuto"
        >
          <FontAwesomeIcon icon={faChevronDown} style={{ width: 12, height: 12 }} />
        </button>
      </div>
    </div>
  )
}
