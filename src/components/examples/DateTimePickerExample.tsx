import { useState } from 'react'
import { Datepicker } from '../../ui/Datepicker'
import { Timepicker } from '../../ui/Timepicker'
import type { TimeValue } from '../../ui/Timepicker'
import { DateTimePicker } from '../../ui/DateTimePicker'
import styles from './DateTimePickerExample.module.scss'

export const DateTimePickerExample = () => {
  const [dateTime, setDateTime] = useState<Date | null>(new Date(2020, 1, 8, 15, 50))
  const [date, setDate] = useState<Date | null>(new Date(2020, 1, 8))
  const [time, setTime] = useState<TimeValue | null>({ hours: 15, minutes: 50 })

  return (
    <div className={styles['datetime-example']}>
      <div className={styles['datetime-example-item']}>
        <DateTimePicker label="Data e Hora" value={dateTime} onChange={setDateTime} />
      </div>

      <div className={styles['datetime-example-item']}>
        <Datepicker label="Data" value={date} onChange={setDate} />
      </div>

      <div className={styles['datetime-example-item']}>
        <Timepicker label="Horário" value={time} onChange={setTime} />
      </div>
    </div>
  )
}
