import React from 'react'
import { Checkbox } from './Checkbox'
import type { CheckboxGroupProps } from './types'
import styles from './Checkbox.module.scss'

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  description,
  options,
  value,
  onChange,
  showSelectAll = true,
  selectAllLabel = 'Selecionar Todos',
  className = ''
}) => {
  const selectableIds = options.filter(option => !option.disabled).map(option => option.id)
  const allSelected = selectableIds.length > 0 && selectableIds.every(id => value.includes(id))

  const toggleOption = (id: string, checked: boolean) => {
    onChange(checked ? [...value, id] : value.filter(current => current !== id))
  }

  const toggleAll = (checked: boolean) => {
    onChange(checked ? selectableIds : [])
  }

  return (
    <div className={`${styles['checkbox-group']}${className ? ` ${className}` : ''}`}>
      {(label || description) && (
        <div className={styles['checkbox-group-header']}>
          {label && <span className={styles['checkbox-group-label']}>{label}</span>}
          {description && <span className={styles['checkbox-group-description']}>{description}</span>}
        </div>
      )}

      <div className={styles['checkbox-group-list']}>
        {showSelectAll && (
          <Checkbox
            label={selectAllLabel}
            checked={allSelected}
            onChange={toggleAll}
            className={styles['checkbox-group-select-all']}
          />
        )}

        {options.map(option => (
          <Checkbox
            key={option.id}
            label={option.label}
            checked={value.includes(option.id)}
            disabled={option.disabled}
            onChange={checked => toggleOption(option.id, checked)}
          />
        ))}
      </div>
    </div>
  )
}
