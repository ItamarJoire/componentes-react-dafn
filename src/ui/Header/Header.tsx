import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCircleHalfStroke, faEllipsisVertical, faUser, faXmark } from '@fortawesome/free-solid-svg-icons'
import type { HeaderProps } from './types'
import { Button, Nav, Search, defaultTopNavLinks } from '..'
import { useTheme } from '../../contexts'
import { HeaderButtonContainer, HeaderNavContainer, HeaderSearchContainer } from './containers'
import styles from './Header.module.scss'

export const Header: React.FC<HeaderProps> = ({
  ministryName = 'Ministério da Gestão e da Inovação em Serviços Públicos',
  institutionName = 'Instituto Nacional de Tecnologia da Informação',
  systemName = '<Nome Da Aplicação Web> (<ACRÔNIMO>)',
  logoHref = '/',
  topNavLinks = defaultTopNavLinks,
  entrarShortLabel = 'Entrar',
  entrarSuffix = ' com gov.br',
  entrarHref = '#',
  showMenuPanel = true,
  isMenuOpen = false,
  onMenuToggleClick
}) => {
  const { theme, toggleTheme } = useTheme()
  const [isMobileTopMenuOpen, setIsMobileTopMenuOpen] = useState(false)
  const handleSearch = (searchTerm: string) => {
    console.log('Search term:', searchTerm)
  }

  const kebabRef = useRef<HTMLDivElement>(null)

  // Fecha o menu kebab (mobile) ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (kebabRef.current && !kebabRef.current.contains(event.target as Node)) {
        setIsMobileTopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={styles['iti-header']}>
      {/* Barra principal: logo, navegação institucional e ações */}
      <div className={styles['iti-header-main']}>
        <a href={logoHref} className={styles['header-logo']} aria-label="Página inicial gov.br">
          <img src="../src/assets/govbr.webp" alt="Logo gov.br" width={90} height={32} />
        </a>

        <p className={styles['iti-header-ministry']}>{ministryName}</p>

        {/* CASO NÃO QUEIRA A NAVEGAÇÃO, REMOVA O COMPONENTE ABAIXO */}
        <HeaderNavContainer>
          <Nav links={topNavLinks} />
        </HeaderNavContainer>

        <span className={styles['iti-header-divider']} aria-hidden="true" />

        <button
          type="button"
          className={`${styles['icon-btn']} ${styles['iti-header-theme-toggle']}`}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          onClick={toggleTheme}
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} style={{ width: 16, height: 16 }} />
        </button>

        <HeaderButtonContainer>
          <Button
            variant="primary"
            href={entrarHref}
            icon={<FontAwesomeIcon icon={faUser} style={{ width: 16, height: 16 }} />}
          >
            {entrarShortLabel}
            <span className={styles['hide-mobile-inline']}>{entrarSuffix}</span>
          </Button>
        </HeaderButtonContainer>

        {/* Menu "kebab" visível apenas em telas pequenas */}
        <div className={styles['iti-header-kebab']} ref={kebabRef}>
          <button
            type="button"
            className={styles['icon-btn']}
            aria-label="Mais opções"
            aria-expanded={isMobileTopMenuOpen}
            onClick={() => setIsMobileTopMenuOpen(v => !v)}
          >
            <FontAwesomeIcon icon={faEllipsisVertical} style={{ width: 20, height: 20 }} />
          </button>
          {isMobileTopMenuOpen && (
            <ul className={styles['iti-header-kebab-menu']}>
              {topNavLinks.map(link => (
                <li key={link.id}>
                  <a href={link.href ?? '#'}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Barra da instituição: alterna o menu lateral e concentra a busca */}
      <div className={styles['iti-header-institution']}>
        {showMenuPanel && (
          <button
            type="button"
            className={`${styles['icon-btn']} ${styles['iti-header-menu-toggle']}`}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            onClick={onMenuToggleClick}
          >
            <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} style={{ width: 20, height: 18 }} />
          </button>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <h1 className={styles['iti-header-title']}>{institutionName}</h1>
          <p className={styles['iti-header-paragh']}>{systemName}</p>
        </div>

        {/* CASO NÃO QUEIRA A BARRA DE BUSCA, REMOVA O COMPONENTE ABAIXO */}
        <HeaderSearchContainer>
          <Search placeholder="O que você procura?" onSearch={handleSearch} />
        </HeaderSearchContainer>
      </div>
    </header>
  )
}
