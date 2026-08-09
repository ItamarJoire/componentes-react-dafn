import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Header } from './ui/Header'
import { Footer } from './ui/Footer'
import { MenuPanel, defaultMenuSections } from './ui/MenuPanel'
import styles from './App.module.scss'
import { AppRoutes } from './routes'
import { paths } from './routes'

const MENU_PANEL_ENABLED = true

export const App = () => {
  const location = useLocation()
  const isLoginPage = location.pathname === paths.login
  const showMenuPanel = MENU_PANEL_ENABLED && !isLoginPage

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSectionIds, setOpenSectionIds] = useState<string[]>(
    defaultMenuSections[0] ? [defaultMenuSections[0].id] : []
  )

  const handleSectionToggle = (sectionId: string) => {
    setOpenSectionIds(current =>
      current.includes(sectionId) ? current.filter(id => id !== sectionId) : [...current, sectionId]
    )
  }

  return (
    <div className={styles['app-wrapper']}>
      <Header
        showMenuPanel={showMenuPanel}
        showNav={!isLoginPage}
        showSearch={!isLoginPage}
        isMenuOpen={isMenuOpen}
        onMenuToggleClick={() => setIsMenuOpen(v => !v)}
      />

      <div className={styles['app-body']}>
        {isMenuOpen && showMenuPanel && (
          <MenuPanel
            menuSections={defaultMenuSections}
            openSectionIds={openSectionIds}
            onSectionToggle={handleSectionToggle}
          />
        )}

        <main className={styles['app-main']} style={{ padding: '40px 0' }}>
          <AppRoutes />
        </main>
      </div>

      <Footer />
    </div>
  )
}
