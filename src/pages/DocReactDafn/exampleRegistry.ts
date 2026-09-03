import type { ComponentType } from 'react'
import { AccordionExample } from '../../components/examples/AccordionExample'
import { BadgeExample } from '../../components/examples/BadgeExample'
import { ButtonExample } from '../../components/examples/ButtonExample'
import { CardExample } from '../../components/examples/CardExample'
import { CarouselExample } from '../../components/examples/CarouselExample'
import { CheckboxExample } from '../../components/examples/CheckboxExample'
import { DateTimePickerExample } from '../../components/examples/DateTimePickerExample'
import { FooterExample } from '../../components/examples/FooterExample'
import { HeaderExample } from '../../components/examples/HeaderExample'
import { InputExample } from '../../components/examples/InputExample'
import { ListExample } from '../../components/examples/ListExample'
import { LoadingExample } from '../../components/examples/LoadingExample'
import { MenuPanelExample } from '../../components/examples/MenuPanelExample'
import { MessageExample } from '../../components/examples/MessageExample'
import { ModalExample } from '../../components/examples/ModalExample'
import { NavExample } from '../../components/examples/NavExample'
import { PageTitleExample } from '../../components/examples/PageTitleExample'
import { RadioExample } from '../../components/examples/RadioExample'
import { SearchExample } from '../../components/examples/SearchExample'
import { SkeletonExample } from '../../components/examples/SkeletonExample'
import { StepExample } from '../../components/examples/StepExample'
import { SwitchExample } from '../../components/examples/SwitchExample'
import { UploadExample } from '../../components/examples/UploadExample'
import { UsersTableExample } from '../../components/examples/UserTableExample'

/**
 * Mapeia cada componente de `src/ui` ao seu exemplo em `src/components/examples`.
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
