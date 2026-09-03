export const paths = {
  home: '/',
  login: '/login',
  docReactDafn: '/doc-react-dafn',
  docReactDafnCleanup: '/doc-react-dafn/como-remover'
} as const

export const getDocComponentPath = (slug: string) => `${paths.docReactDafn}/${slug}`
