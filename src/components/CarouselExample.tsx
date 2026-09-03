import type { CSSProperties } from 'react'
import { Carousel } from '../ui/Carousel'

const bannerStyle = (background: string): CSSProperties => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '48px 24px',
  textAlign: 'center',
  background,
  borderRadius: '8px'
})

const gridCardStyle = (background: string): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '120px',
  color: 'var(--white)',
  fontWeight: 'bold',
  background,
  borderRadius: '8px'
})

export const CarouselExample = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <p>Um item por vez: gestos de arraste, setas, dots e play/pause do autoplay</p>
        <Carousel
          autoPlay
          items={[
            {
              id: '1',
              content: (
                <div style={bannerStyle('var(--blue-warm-vivid-70-main)')}>
                  <h3 style={{ color: 'var(--white)', margin: 0 }}>Bem-vindo ao gov.br Design System</h3>
                  <p style={{ color: 'var(--white)' }}>Padrão de interface adotado pelos sistemas do governo federal.</p>
                </div>
              )
            },
            {
              id: '2',
              content: (
                <div style={bannerStyle('var(--green-cool-vivid-50-main)')}>
                  <h3 style={{ color: 'var(--white)', margin: 0 }}>Contribua com o projeto</h3>
                  <p style={{ color: 'var(--white)' }}>Acesse o repositório no GitHub e abra um pull request com sua proposta.</p>
                </div>
              )
            },
            {
              id: '3',
              content: (
                <div style={bannerStyle('var(--yellow-vivid-50)')}>
                  <h3 style={{ color: 'var(--white)', margin: 0 }}>Consulte a documentação</h3>
                  <p style={{ color: 'var(--white)' }}>Confira todos os componentes disponíveis na aba de documentação.</p>
                </div>
              )
            }
          ]}
        />
      </div>

      <div>
        <p>Múltiplos itens visíveis (itemsPerView), navegando um item por vez</p>
        <Carousel
          itemsPerView={3}
          gap={16}
          items={Array.from({ length: 6 }, (_, index) => ({
            id: String(index + 1),
            content: (
              <div style={gridCardStyle(index % 2 === 0 ? 'var(--blue-warm-vivid-50)' : 'var(--blue-warm-vivid-70-main)')}>
                Item {index + 1}
              </div>
            )
          }))}
        />
      </div>
    </div>
  )
}
