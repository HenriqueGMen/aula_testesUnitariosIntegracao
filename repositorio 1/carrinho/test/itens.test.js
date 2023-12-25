import Item from '../item.js';

describe('Teste para os itens', () => {
  it('Deve ter três argumentos (nome, valor, quantidade)', () => {
    const item1 = new Item('Macarrão', 3.5, 2);

    expect(item1.nome).toBe('Macarrão');
    expect(item1.valor).toBe(3.5);
    expect(item1.quantidade).toBe(2);
  });

  it('Deve ter o preço calculado de acordo com a quantidade', () => {
    const item1 = new Item('Batata', 0.1, 3);

    expect(item1.pegaValorTotalItem()).toBeCloseTo(0.3);
  });
});
