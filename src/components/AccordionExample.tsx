import { Accordion } from '../ui/Accordion'

export const AccordionExample = () => {
  return (
    <Accordion
      items={[
        {
          id: '1',
          title: 'O que é o gov.br Design System?',
          content: 'É o padrão de interface adotado pelos sistemas do governo federal.'
        },
        {
          id: '2',
          title: 'Como faço para contribuir com este projeto?',
          content: 'Acesse o repositório no GitHub e abra um pull request com sua proposta.'
        },
        {
          id: '3',
          title: 'Onde encontro a documentação dos componentes?',
          content: 'Na aba de documentação disponível na página inicial deste projeto.'
        }
      ]}
      allowMultiple
    />
  )
}
