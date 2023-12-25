import Carrinho from '../carrinho.js';
import Item from '../item.js';

describe('Testes para o carrinho', () => {
  it('Carrinho deve iniciar vazio', () => {
    const carrinho = new Carrinho();

    expect(carrinho.subtotal).toBeNull();
  });

  it('Deve guardar itens', () => {
    const item1 = new Item('Mouse', 45.8, 1);
    const item2 = new Item('Baterias', 29.9, 6);

    const carrinho = new Carrinho();
    carrinho.adiciona(item1);
    carrinho.adiciona(item2);

    expect(typeof carrinho).toBe('object');
    expect(carrinho.itens[0]).toBe(item1);
    expect(carrinho.itens[1]).toBe(item2);

    expect(carrinho.itens).toContain(item1);
    expect(carrinho.itens).toContain(item2);
  });

  it('Deve conter a propriedade total na inicialização', () => {
    const carrinho = new Carrinho();

    expect(carrinho).toHaveProperty('total');
  });
});
