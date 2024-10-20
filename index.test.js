//Não faça nada neste arquivo
const contaAteDez = require("./index"); // Importa a função

describe("Testa a função contaAteDez", () => {
  it("Deve imprimir os números de 1 a 10 no console", () => {
    // Faz o mock do console.log
    console.log = jest.fn();

    // Chama a função
    contaAteDez();

    // Verifica se console.log foi chamado 10 vezes
    expect(console.log).toHaveBeenCalledTimes(10);

    // Verifica se os valores de 1 a 10 foram impressos
    for (let i = 1; i <= 10; i++) {
      expect(console.log).toHaveBeenCalledWith(i);
    }
  });
});
