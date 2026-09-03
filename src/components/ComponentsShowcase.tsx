import { useState } from 'react'
import { AccordionExample } from './AccordionExample'
import { BadgeExample } from './BadgeExample'
import { ButtonExample } from './ButtonExample'
import { CardExample } from './CardExample'
import { CarouselExample } from './CarouselExample'
import { CheckboxExample } from './CheckboxExample'
import { DateTimePickerExample } from './DateTimePickerExample'
import { InputExample } from './InputExample'
import { ListExample } from './ListExample'
import { LoadingExample } from './LoadingExample'
import { MenuPanelExample } from './MenuPanelExample'
import { MessageExample } from './MessageExample'
import { ModalExample } from './ModalExample'
import { NavExample } from './NavExample'
import { RadioExample } from './RadioExample'
import { SearchExample } from './SearchExample'
import { UploadExample } from './UploadExample'
import { UsersTableExample } from './UserTableExample'
import styles from './ComponentsShowcase.module.scss'

const tabs = [
  { id: 'table', label: 'Table', Component: UsersTableExample },
  { id: 'accordion', label: 'Accordion', Component: AccordionExample },
  { id: 'badge', label: 'Badge', Component: BadgeExample },
  { id: 'button', label: 'Button', Component: ButtonExample },
  { id: 'card', label: 'Card', Component: CardExample },
  { id: 'carousel', label: 'Carousel', Component: CarouselExample },
  { id: 'checkbox', label: 'Checkbox', Component: CheckboxExample },
  { id: 'datetimepicker', label: 'DateTimePicker', Component: DateTimePickerExample },
  { id: 'input', label: 'Input', Component: InputExample },
  { id: 'list', label: 'List', Component: ListExample },
  { id: 'loading', label: 'Loading', Component: LoadingExample },
  { id: 'menu-panel', label: 'MenuPanel', Component: MenuPanelExample },
  { id: 'message', label: 'Message', Component: MessageExample },
  { id: 'modal', label: 'Modal', Component: ModalExample },
  { id: 'nav', label: 'Nav', Component: NavExample },
  { id: 'radio', label: 'Radio', Component: RadioExample },
  { id: 'search', label: 'Search', Component: SearchExample },
  { id: 'upload', label: 'Upload', Component: UploadExample }
]

export const ComponentsShowcase = () => {
  const [activeId, setActiveId] = useState(tabs[0].id)

  const ActiveComponent = tabs.find(tab => tab.id === activeId)?.Component ?? tabs[0].Component

  return (
    <div className={styles['showcase']}>
      <div className={styles['tabs']} role="tablist" aria-label="Componentes de exemplo">
        {tabs.map(tab => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeId === tab.id}
            className={`${styles['tab']}${activeId === tab.id ? ` ${styles['tab-active']}` : ''}`}
            onClick={() => setActiveId(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles['panel']}>
        <div className={styles['panel-content']}>
          <ActiveComponent />
        </div>
      </div>
    </div>
  )
}
