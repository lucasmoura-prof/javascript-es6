// Operações em Array com ES6+
const array = [1, 3, 4, 5, 8, 9];

// Percorre todos itens do vetor e executa determinada ação para ele
const newArray = array.map(function (item, index) { // index é um parâmetro opcional
    //return item * 2;
    return item + index;
});

console.log(newArray);

// Reduce => consumir todo o nosso vetor e transformar em uma unica informação (geralmente numero)
const sum = array.reduce(function (total, nextValue) {
    return total  + nextValue;
});

// Execução
// total: 0 next: 1
// total: 1 next: 3
// total: 4 next: 4

console.log(sum);

// Filtrar somente os itens que são pares
const filter = array.filter(function (item) {
    return item % 2 === 0;
});

// Compatibilidade
// http://kangax.github.io/compat-table/es5/
console.log(filter);

const find = array.find(function (item) {
    return item === 4;
});

console.log(find);
