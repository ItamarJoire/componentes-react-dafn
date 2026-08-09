import type { SocialLink } from '../MenuPanel/types'
import type { FooterColumn } from './types'

export const defaultFooterColumns: FooterColumn[] = [
  {
    id: 'assuntos',
    title: 'Assuntos',
    links: [
      { id: 'auditoria-icp', label: 'Auditoria ICP-Brasil', href: '#' },
      { id: 'car', label: 'Cadastro de Agente de Registro - CAR', href: '#' }
    ]
  },
  {
    id: 'acesso-informacao',
    title: 'Acesso à Informação',
    links: [
      { id: 'institucional', label: 'Institucional', href: '#' },
      { id: 'acoes-programas', label: 'Ações e Programas', href: '#' }
    ]
  },
  {
    id: 'centrais-conteudo',
    title: 'Centrais de Conteúdo',
    links: [
      { id: 'aplicativos', label: 'Aplicativos', href: '#' },
      { id: 'glossario', label: 'Glossário', href: '#' }
    ]
  },
  {
    id: 'canais-atendimento',
    title: 'Canais de Atendimento',
    links: [
      { id: 'imprensa', label: 'Imprensa', href: '#' },
      { id: 'ouvidoria', label: 'Ouvidoria ITI', href: '#' }
    ]
  },

  {
    id: 'endereco',
    title: 'Endereço',
    links: [
      {
        id: 'endereco-link',
        label: 'Setor de Autarquias Sul – SAUS Quadra 06 BL E. \n Complexo Anatel, CEP 70070-940 – Brasília/DF',
        href: '#'
      }
    ]
  }
]

export const defaultFooterSocialLinks: SocialLink[] = [
  { id: 'x', label: 'X (Twitter)', href: '#', icon: 'x' },
  { id: 'youtube', label: 'YouTube', href: '#', icon: 'youtube' },
  { id: 'facebook', label: 'Facebook', href: '#', icon: 'facebook' },
  { id: 'flickr', label: 'Flickr', href: '#', icon: 'flickr' },
  { id: 'instagram', label: 'Instagram', href: '#', icon: 'instagram' }
]
