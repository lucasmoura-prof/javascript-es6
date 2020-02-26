// Uma das funcionalidades mais usadas do ES6
const array = [1, 3, 4, 5, 6];

/*
const newArray = array.map(function (item) { // essa função não tem nome né? (anônima)
    return item * 2;
});*/

/*
Passo-a-passo:
1. Remove a keyword function
2. Entre o parênteses e a chave coloca o sinal =>
3. a função recebe apenas um parâmetro?
    sim
    3.1 remover o parêntese por volta do parâmetro
    3.2 a função retorna simplesmente uma informação (só 1 linha)
        3.2.1 copia a linha sem o return
        3.2.2 colocar diretamente depois da flechinha (=>) (sem o uso das chaves)
*/

const newArray = array.map(item => item * 2);
// deverá ser usada em ambiente de função anônima

console.log(newArray);

// Criar funções usando constantes
const test = () => {
    console.log('oi'); // não é recomendado fazer issooooo!!! Só exemplificando
}

const test2 = () => [1, 2, 3];
// retornar um objeto:
//const test3 = () => { nome: 'Lucas' }; // vai imprimir undefined, jeito correto abaixo
const test3 = () => ({ nome: 'Lucas' });

test();
console.log(test2());
console.log(test3()); // undefined porque as chaves é utilizada para o corpo da função e não para o objeto



// Valores padrão de funções
/*function soma (a = 3, b = 6) {
    return a + b;
}
*/

// Versão arrow function
const soma = (a = 3, b = 6) => a + b;

console.log(soma(1)); // não especificou o segundo valor (b). Imprime 7
console.log(soma());  // Imprime 9
