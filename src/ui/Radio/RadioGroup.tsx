import React, { useId } from 'react'
import { Radio } from './Radio'
import type { RadioGroupProps } from './types'
import styles from './Radio.module.scss'

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  description,
  options,
  value,
  onChange,
  name,
  className = ''
}) => {
  const generatedName = useId()
  const groupName = name ?? generatedName

  return (
    <div
      className={`${styles['radio-group']}${className ? ` ${className}` : ''}`}
      role="radiogroup"
      aria-label={label}
    >
      {(label || description) && (
        <div className={styles['radio-group-header']}>
          {label && <span className={styles['radio-group-label']}>{label}</span>}
          {description && <span className={styles['radio-group-description']}>{description}</span>}
        </div>
      )}

      <div className={styles['radio-group-list']}>
        {options.map(option => (
          <Radio
            key={option.id}
            name={groupName}
            value={option.id}
            label={option.label}
            checked={value === option.id}
            disabled={option.disabled}
            onChange={checked => checked && onChange(option.id)}
          />
        ))}
      </div>
    </div>
  )
}
