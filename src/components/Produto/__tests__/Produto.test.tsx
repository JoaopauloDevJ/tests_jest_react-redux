import { fireEvent, screen } from '@testing-library/react'
import { renderizaComProvider } from '../../../utils/Tests'
import Produto from '../index'

const jogo = {
  id: 2,
  categoria: 'RPG',
  imagem: '',
  plataformas: ['XBOX', 'PS5'],
  preco: 199.9,
  precoAntigo: 299.9,
  titulo: 'Hogwarts Legacy'
}

describe('Testes para componente produto', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Produto game={jogo} />)
    expect(screen.getByText('Hogwarts Legacy')).toBeInTheDocument()
  })

  test('Deve adicionar um item ao carrinho', () => {
    const { store } = renderizaComProvider(<Produto game={jogo} />)
    const botao = screen.getByTestId('add-carrinho')
    fireEvent.click(botao)

    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
