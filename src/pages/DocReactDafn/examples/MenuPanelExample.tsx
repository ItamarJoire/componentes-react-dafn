import { useState } from 'react'
import { MenuPanel, defaultMenuSections } from '../../../ui/MenuPanel'

export const MenuPanelExample = () => {
  const [openSectionIds, setOpenSectionIds] = useState<string[]>([])

  const handleSectionToggle = (sectionId: string) => {
    setOpenSectionIds(current =>
      current.includes(sectionId) ? current.filter(id => id !== sectionId) : [...current, sectionId]
    )
  }

  return (
    <MenuPanel
      menuSections={defaultMenuSections}
      openSectionIds={openSectionIds}
      onSectionToggle={handleSectionToggle}
    />
  )
}
