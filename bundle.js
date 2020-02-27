"use strict";

var usuario = {
  nome: 'Joao',
  idade: 25,
  endereco: {
    cidade: 'Ituiutaba',
    estado: 'MG'
  }
};
console.log(usuario); //

/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/
// Desestruturação aplicado no ES6+

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade; // lado esquerdo fala as propriedades

console.log(nome, idade);
console.log(cidade); // Pode ser usado em vários locais

/*function mostrarNome(usuario) {
    console.log(usuario.nome);
}*/

function mostrarNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome);
  console.log(idade);
}

mostrarNome();
