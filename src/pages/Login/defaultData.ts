import type { AccordionItem } from '../../ui/Accordion/types'

export const loginFaqItems: AccordionItem[] = [
  {
    id: 'como-entrar',
    title: 'Como faço login no sistema?',
    content:
      'Clique em "Entrar com gov.br" e informe seu CPF e senha da conta gov.br. Você será redirecionado de volta ao sistema após a autenticação.'
  },
  {
    id: 'esqueci-senha',
    title: 'Esqueci minha senha, o que faço?',
    content:
      'A senha é gerenciada pela conta gov.br. Utilize a opção de recuperação de senha na própria página de login do gov.br para redefini-la.'
  },
  {
    id: 'sem-conta',
    title: 'Ainda não tenho uma conta gov.br, como faço?',
    content:
      'Acesse o site oficial do gov.br e crie sua conta gratuitamente. Depois, use as mesmas credenciais para entrar neste sistema.'
  },
  {
    id: 'nivel-conta',
    title: 'Preciso de um nível específico de conta gov.br?',
    content:
      'Alguns recursos do sistema podem exigir conta gov.br com nível de confiabilidade Prata ou Ouro. Verifique seu nível na própria conta gov.br.'
  },
  {
    id: 'seguranca',
    title: 'Meus dados de acesso estão protegidos?',
    content:
      'Sim. A autenticação é feita pelo gov.br e o sistema não armazena sua senha, seguindo as diretrizes de segurança e privacidade da administração pública.'
  },
  {
    id: 'problema-login',
    title: 'Não estou conseguindo entrar, o que fazer?',
    content:
      'Verifique se seus dados estão corretos e se sua conta gov.br está ativa. Persistindo o problema, entre em contato com o suporte do sistema.'
  }
]
