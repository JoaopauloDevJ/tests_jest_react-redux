import { getByText, screen } from '@testing-library/react'
import Header from '../index'

import { renderizaComProvider } from '../../../utils/Tests'

describe('Teste para o componente Header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['PS5'],
              preco: 159.99,
              precoAntigo: 259.99,
              titulo: 'Elden Ring'
            },
            {
              id: 2,
              categoria: 'RPG',
              imagem: '',
              plataformas: ['XBOX', 'PS5'],
              preco: 199.99,
              precoAntigo: 299.99,
              titulo: 'Hogwarts Legacy'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('quantidade-carrinho').innerHTML).toContain(
      '2 itens'
    )
  })
})
