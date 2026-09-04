import type { ComponentType } from 'react'
import { AccordionExample } from './examples/AccordionExample'
import { BadgeExample } from './examples/BadgeExample'
import { ButtonExample } from './examples/ButtonExample'
import { CardExample } from './examples/CardExample'
import { CarouselExample } from './examples/CarouselExample'
import { CheckboxExample } from './examples/CheckboxExample'
import { DateTimePickerExample } from './examples/DateTimePickerExample'
import { FooterExample } from './examples/FooterExample'
import { HeaderExample } from './examples/HeaderExample'
import { InputExample } from './examples/InputExample'
import { ListExample } from './examples/ListExample'
import { LoadingExample } from './examples/LoadingExample'
import { MenuPanelExample } from './examples/MenuPanelExample'
import { MessageExample } from './examples/MessageExample'
import { ModalExample } from './examples/ModalExample'
import { NavExample } from './examples/NavExample'
import { PageTitleExample } from './examples/PageTitleExample'
import { RadioExample } from './examples/RadioExample'
import { SearchExample } from './examples/SearchExample'
import { SkeletonExample } from './examples/SkeletonExample'
import { StepExample } from './examples/StepExample'
import { SwitchExample } from './examples/SwitchExample'
import { UploadExample } from './examples/UploadExample'
import { UsersTableExample } from './examples/UserTableExample'

/**
 * Mapeia cada componente de `src/ui` ao seu exemplo em `./examples`.
 * Datepicker e Timepicker ficam de fora por não terem um exemplo próprio (só existe DateTimePickerExample).
 */
export const exampleRegistry: Partial<Record<string, ComponentType>> = {
  Accordion: AccordionExample,
  Badge: BadgeExample,
  Button: ButtonExample,
  Card: CardExample,
  Carousel: CarouselExample,
  Checkbox: CheckboxExample,
  DateTimePicker: DateTimePickerExample,
  Footer: FooterExample,
  Header: HeaderExample,
  Input: InputExample,
  List: ListExample,
  Loading: LoadingExample,
  MenuPanel: MenuPanelExample,
  Message: MessageExample,
  Modal: ModalExample,
  Nav: NavExample,
  PageTitle: PageTitleExample,
  Radio: RadioExample,
  Search: SearchExample,
  Skeleton: SkeletonExample,
  Step: StepExample,
  Switch: SwitchExample,
  Table: UsersTableExample,
  Upload: UploadExample
}
