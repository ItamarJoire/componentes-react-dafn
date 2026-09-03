import { useState } from 'react'
import { Button } from '../ui/Button'
import { Modal } from '../ui/Modal'
import { RadioGroup } from '../ui/Radio'
import styles from './ModalExample.module.scss'

const radioOptions = [
  { id: 'opcao-1', label: 'Texto da opção' },
  { id: 'opcao-2', label: 'Texto da opção' },
  { id: 'opcao-3', label: 'Texto da opção' },
  { id: 'opcao-4', label: 'Texto da opção' }
]

const paragraphs = [
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
  'Mauris id gravida nulla. Cras sagittis dapibus felis vitae semper. Donec vel hendrerit ante. Etiam sed blandit nisi. Praesent iaculis, nisl eget rutrum vehicula, lacus tortor feugiat diam, et euismod lacus metus eget nisi.',
  'Sed fermentum, nunc nec efficitur pharetra, felis dolor feugiat massa, ut semper turpis felis quis ligula. Quisque non lectus id nunc facilisis dictum.'
]

export const ModalExample = () => {
  const [isSimpleOpen, setIsSimpleOpen] = useState(false)
  const [isScrollOpen, setIsScrollOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState('opcao-2')

  const simpleFooter = (
    <>
      <Button variant="secondary" onClick={() => setIsSimpleOpen(false)}>
        Button
      </Button>
      <Button variant="primary" onClick={() => setIsSimpleOpen(false)}>
        Button
      </Button>
    </>
  )

  const scrollFooter = (
    <>
      <Button variant="secondary" onClick={() => setIsScrollOpen(false)}>
        Button
      </Button>
      <Button variant="primary" onClick={() => setIsScrollOpen(false)}>
        Button
      </Button>
    </>
  )

  return (
    <div className={styles['modal-example']}>
      <Button onClick={() => setIsSimpleOpen(true)}>Abrir modal sem scroll</Button>
      <Button variant="secondary" onClick={() => setIsScrollOpen(true)}>
        Abrir modal com scroll
      </Button>

      <Modal open={isSimpleOpen} onClose={() => setIsSimpleOpen(false)} title="Título" footer={simpleFooter}>
        <RadioGroup
          name="modal-example-option"
          options={radioOptions}
          value={selectedOption}
          onChange={setSelectedOption}
        />
      </Modal>

      <Modal
        open={isScrollOpen}
        onClose={() => setIsScrollOpen(false)}
        title="Título"
        footer={scrollFooter}
        className={styles['modal-scroll-demo']}
      >
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Modal>
    </div>
  )
}
