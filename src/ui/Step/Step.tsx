import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import type { StepProps, StepStatus } from './types'
import styles from './Step.module.scss'

const getStatus = (stepNumber: number, currentStep: number): StepStatus => {
  if (stepNumber < currentStep) return 'completed'
  if (stepNumber === currentStep) return 'current'
  return 'pending'
}

export const Step: React.FC<StepProps> = ({ steps, currentStep, onStepClick, className = '' }) => {
  return (
    <ol className={`${styles['step']}${className ? ` ${className}` : ''}`}>
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const status = getStatus(stepNumber, currentStep)
        const isBeforeActive = index > 0 && stepNumber <= currentStep
        const isAfterActive = stepNumber < currentStep

        const itemClasses = [
          styles['step-item'],
          styles[`is-${status}`],
          isBeforeActive ? styles['is-connector-before-active'] : '',
          isAfterActive ? styles['is-connector-after-active'] : ''
        ]
          .filter(Boolean)
          .join(' ')

        return (
          <li key={step.id} className={itemClasses} aria-current={status === 'current' ? 'step' : undefined}>
            {onStepClick ? (
              <button type="button" className={styles['step-circle']} onClick={() => onStepClick(stepNumber)}>
                {stepNumber}
                {status === 'completed' && (
                  <span className={styles['step-check-badge']}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
              </button>
            ) : (
              <span className={styles['step-circle']}>
                {stepNumber}
                {status === 'completed' && (
                  <span className={styles['step-check-badge']}>
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                )}
              </span>
            )}
            <span className={styles['step-label']}>{step.label}</span>
          </li>
        )
      })}
    </ol>
  )
}
