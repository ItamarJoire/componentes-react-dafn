import { useState } from 'react'
import { Step } from '../../ui/Step'
import type { StepItem } from '../../ui/Step'
import styles from './StepExample.module.scss'

const steps: StepItem[] = [
  { id: '1', label: 'Exemplo de Rótulo' },
  { id: '2', label: 'Exemplo de Rótulo' },
  { id: '3', label: 'Exemplo de Rótulo' },
  { id: '4', label: 'Exemplo de Rótulo' }
]

export const StepExample = () => {
  const [currentStep, setCurrentStep] = useState(3)

  return (
    <div className={styles['step-example']}>
      <Step steps={steps} currentStep={currentStep} onStepClick={setCurrentStep} />
    </div>
  )
}
