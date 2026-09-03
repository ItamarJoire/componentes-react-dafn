import type { DocNavCategory, DocNavItem } from './types'

function toSlug(componentName: string): string {
  return componentName.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

function toItem(componentName: string): DocNavItem {
  return { slug: toSlug(componentName), componentName, label: componentName }
}

export const docNavCategories: DocNavCategory[] = [
  {
    id: 'formulario',
    label: 'Formulário',
    items: [
      'Button',
      'Checkbox',
      'Radio',
      'Switch',
      'Input',
      'Search',
      'Upload',
      'Datepicker',
      'Timepicker',
      'DateTimePicker'
    ].map(toItem)
  },
  {
    id: 'navegacao',
    label: 'Navegação',
    items: ['Nav', 'MenuPanel', 'Accordion', 'Step'].map(toItem)
  },
  {
    id: 'layout',
    label: 'Layout',
    items: ['Header', 'Footer', 'Card', 'PageTitle', 'Table', 'List', 'Carousel'].map(toItem)
  },
  {
    id: 'feedback',
    label: 'Feedback',
    items: ['Badge', 'Loading', 'Skeleton', 'Message', 'Modal'].map(toItem)
  }
]

export const docNavItems: DocNavItem[] = docNavCategories.flatMap(category => category.items)

export function findDocNavItemBySlug(slug: string | undefined): DocNavItem | undefined {
  return docNavItems.find(item => item.slug === slug)
}
