import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import type { CalendarPanelProps } from './types'
import styles from './Datepicker.module.scss'

const MONTH_NAMES = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]

const WEEKDAY_NAMES = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()

const getCalendarDays = (viewDate: Date) => {
  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()
  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()

  const days: { date: Date; outside: boolean }[] = []

  for (let i = firstWeekday; i > 0; i--) {
    days.push({ date: new Date(year, month, 1 - i), outside: true })
  }
  for (let day = 1; day <= daysInMonth; day++) {
    days.push({ date: new Date(year, month, day), outside: false })
  }
  while (days.length < 42) {
    const last = days[days.length - 1].date
    days.push({ date: new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1), outside: true })
  }

  return days
}

export const CalendarPanel: React.FC<CalendarPanelProps> = ({
  viewDate,
  selectedDate,
  onSelectDate,
  onViewDateChange,
  minDate,
  maxDate
}) => {
  const days = getCalendarDays(viewDate)
  const today = new Date()

  const changeMonth = (offset: number) => {
    onViewDateChange(new Date(viewDate.getFullYear(), viewDate.getMonth() + offset, 1))
  }

  const isDisabled = (date: Date) => {
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true
    if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true
    return false
  }

  return (
    <div className={styles['calendar']}>
      <div className={styles['calendar-header']}>
        <button
          type="button"
          className={styles['calendar-nav']}
          onClick={() => changeMonth(-1)}
          aria-label="Mês anterior"
        >
          <FontAwesomeIcon icon={faChevronLeft} style={{ width: 14, height: 14 }} />
        </button>

        <div className={styles['calendar-title']}>
          <select
            className={styles['calendar-month-select']}
            value={viewDate.getMonth()}
            onChange={event => onViewDateChange(new Date(viewDate.getFullYear(), Number(event.target.value), 1))}
            aria-label="Mês"
          >
            {MONTH_NAMES.map((monthName, index) => (
              <option key={monthName} value={index}>
                {monthName}
              </option>
            ))}
          </select>

          <input
            type="number"
            className={styles['calendar-year-input']}
            value={viewDate.getFullYear()}
            onChange={event => {
              const year = Number(event.target.value)
              if (!Number.isNaN(year)) onViewDateChange(new Date(year, viewDate.getMonth(), 1))
            }}
            aria-label="Ano"
          />
        </div>

        <button
          type="button"
          className={styles['calendar-nav']}
          onClick={() => changeMonth(1)}
          aria-label="Próximo mês"
        >
          <FontAwesomeIcon icon={faChevronRight} style={{ width: 14, height: 14 }} />
        </button>
      </div>

      <div className={styles['calendar-weekdays']}>
        {WEEKDAY_NAMES.map(weekdayName => (
          <span key={weekdayName}>{weekdayName}</span>
        ))}
      </div>

      <div className={styles['calendar-days']}>
        {days.map(({ date, outside }) => {
          const disabled = isDisabled(date)
          const selected = !!selectedDate && isSameDay(date, selectedDate)
          const isToday = isSameDay(date, today)

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={disabled}
              className={[
                styles['calendar-day'],
                outside ? styles['is-outside'] : '',
                selected ? styles['is-selected'] : '',
                !selected && isToday ? styles['is-today'] : ''
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onSelectDate(date)}
            >
              {date.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
