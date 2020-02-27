"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

mostrarNome(usuario); // Operadores rest e spread
// ...
// Precisa instalar um novo pacote (rest e spread) ainda não foram acoplados a versão principal do Babel
// Sendo necessário instalar eles como plugins
// yarn add @babel/plugin-proposal-object-rest-spread
// Copiar essa informação para configurar o nosso babel
// Dentro do .babelrc, adicionar a propriedade (array) plugins e adiciona a string "@babel/plugin-proposal-object-rest-spread"
// Reinicia o babel

/* REST tem 2 aplicações
    pegar o resto das propriedades
*/

var meuUsuario = {
  nomeUsuario: 'Joao',
  idade: 25,
  endereco: {
    cidade: 'Ituiutaba',
    estado: 'MG'
  }
};

var nomeUsuario = meuUsuario.nomeUsuario,
    resto = _objectWithoutProperties(meuUsuario, ["nomeUsuario"]);

console.log(nomeUsuario);
console.log(resto); // Podemos aplicar o REST em vetores também

var array = [1, 2, 3, 4];
var primeiro = array[0],
    segundo = array[1],
    restanteArray = array.slice(2);
console.log(primeiro);
console.log(segundo);
console.log(restanteArray); // usando em parâmetros de funções

/*function soma (a, b) {
    return a + b;
}*/
// Se quisesse adicionar mais um parâmetro, teria que colocar:

/*function soma (a, b, c) {
    return a + b + c;
}*/
// Para adicionar o 4 parametro???

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  //return params; // converte os parâmetros que enviamos em array
  return params.reduce(function (total, next) {
    return total + next;
  });
}
/*function soma (a, b, ...resto) {
    //return params; // converte os parâmetros que enviamos em array
    return params.reduce((total, next) => total + next);
}*/


console.log(soma(1, 3, 4)); // SPREAD (propagar as informações de um objeto/array) para outra estrutura de dados

var array1 = [1, 2, 3];
var array2 = [4, 5, 6]; // juntar os 2 arrays sem usar funções

var array3 = [].concat(array1, array2);
console.log(array3);
var user1 = {
  nome: 'Joao',
  idade: 23,
  empresa: 'IFTM'
};

var user2 = _objectSpread({}, user1, {
  nome: 'Lucas'
});

console.log(user2); // Template Literals

var fullName = 'Uzumaki Naruto';
var age = 22; //
//console.log('Meu nome é ' + fullName + ' e tenho ' + age + ' anos');

console.log("Meu nome \xE9 ".concat(fullName, " e tenho ").concat(age, " anos!")); // usando sinal de crase
