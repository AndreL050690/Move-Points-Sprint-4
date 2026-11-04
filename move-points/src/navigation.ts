export interface NavigationItem {
  to: string
  label: string
  end?: boolean
}

export const navigationItems: NavigationItem[] = [
  { to: '/', label: 'Início', end: true },
  { to: '/integrantes', label: 'Integrantes' },
  { to: '/sobre', label: 'Sobre' },
  { to: '/funcionamento', label: 'Como funciona' },
  { to: '/painel', label: 'Painel API' },
  { to: '/recompensas', label: 'Recompensas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contato', label: 'Contato' },
]
