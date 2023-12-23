# Repositório de Testes Unitários e de Integração em Node.js

Este repositório contém exemplos de testes unitários e de integração para aplicações Node.js. Os testes são escritos usando Jest e Mocha, e incluem exemplos de como escrever testes para funções individuais e como testar a interação entre diferentes partes do seu código.

## Testes Unitários

Os testes unitários são usados para verificar o comportamento de uma única unidade de código, como uma função ou método. No nosso caso, usamos o Jest para escrever nossos testes unitários.

### Exemplo de Teste Unitário

Aqui está um exemplo de um teste unitário para uma função `aplicarDesconto`:

```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

test('add function adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('multiply function multiplies two numbers correctly', () => {
  expect(multiply(2, 3)).toBe(6);
});
```

Os testes unitários estão focados em testar unidades individuais de código, neste caso, as funções add e multiply

## Testes de Integração

Os testes de integração são usados para verificar a interação entre diferentes partes do seu código. No nosso caso, usamos o Mocha para escrever nossos testes de integração.

### Exemplo de Teste de Integração

```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

test('add and multiply functions work together', () => {
  const result = multiply(add(2, 3), 4);
  expect(result).toBe(20);
});
```

Os testes de integração testam como várias partes do sistema interagem entre si. Neste exemplo, estamos testando se a adição e a multiplicação funcionam corretamente quando usadas em conjunto.

## Execução dos Testes

Para executar os testes, você pode usar o comando `npm test` no terminal.

## Contribuição

As contribuições são bem-vindas! Se você tiver uma ideia para um novo teste ou encontrar um bug nos testes existentes, sinta-se à vontade para abrir uma issue ou pull request.



