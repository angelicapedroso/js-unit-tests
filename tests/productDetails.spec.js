const productDetails = require('../src/productDetails');

/*
  Dadas duas strings que representam nomes de produtos, retorne um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara') // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    const returnFunction = productDetails('first', 'second');
    expect(typeof productDetails('first', 'second')).toBe('object');
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(returnFunction.length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof returnFunction[0]).toBe('object');
    expect(typeof returnFunction[1]).toBe('object');
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    let boolean = false;
    if (typeof returnFunction[0] === 'object' && typeof returnFunction[1] === 'object') {
      boolean = true;
    }
    expect(boolean).toBe(true);
    // Teste se os dois productIds terminam com 123.
    let firstObject = returnFunction[0].details.productId.slice(-3);
    let secondObject = returnFunction[1].details.productId.slice(-3);
    expect(firstObject && secondObject).toBe('123');
  });
});
// Obs: Participei da mentoria com o colega Humberto e obtive ajuda nos exercícios.
