"use strict";

var a = 1;
var user = {
  name: 'Lucas'
}; //a = 3; // vai dar erro porque a é read-only

user.name = 'Joao';
console.log(user.name);

function test(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
} // console.log(y); // erro: y não definido, escopos diferentes


test(10);
/*
Em JavaScript, toda variável é “elevada/içada” (hoisting) até o topo do seu contexto de execução. 
Esse mecanismo move as variáveis para o topo do seu escopo antes da execução do código.

No nosso exemplo acima, como a variável mensagemDentroDoIf está dentro de uma function, 
a declaração da mesma é elevada (hoisting) para o topo do seu contexto, ou seja, para o topo da function.

É por esse mesmo motivo que “é possível usar uma variável antes dela ter sido declarada”: 
em tempo de execução a variável será elevada (hoisting) e tudo funcionará corretamente.
No caso da palavra-chave var, além da variável ser içada (hoisting) ela é automaticamente 
inicializada com o valor undefined (caso não seja atribuído nenhum outro valor).

Às vezes, queremos declarar variáveis que serão utilizadas apenas dentro de um pequeno trecho do nosso código. Ter que lidar com o escopo de função das variáveis declaradas com var (escopo abrangente) pode confundir a cabeça até de programadores mais experientes.
*/

var exibirMensagem = function exibirMensagem() {
  mensagem = 'Minha mensagem';
  console.log(mensagem); // 

  var mensagem; // o JS irá içar (mover) essa variável (para o inicio da função)
};

var mensagemGlobal = 'Olá mundo';

var exibirMensagem2 = function exibirMensagem2() {
  console.log(mensagemGlobal);
  var mensagemGlobal = 'Teste';
  /*
  JS irá fazer:
  var mensagemGlobal; // undefined
  console.log(mensagemGlobal);
  mensagemGlobal = 'Teste'
  */
};

exibirMensagem();
exibirMensagem2(); // imprime undefined
// Conclusão: evite esse tipo de problema declarando todas as variáveis na primeira linha

var exibeMensagem = function exibeMensagem() {
  // içou escopoFuncao (var)
  if (true) {
    var escopoFuncao = 'Caelum';
    var _escopoBloco = 'Alura';
    console.log(_escopoBloco); // Alura 
  }

  console.log(escopoFuncao); // Caelum 

  console.log(escopoBloco);
}; //exibeMensagem(); // let irá garantir o escopo do bloco


var exibeMensagem3 = function exibeMensagem3() {
  var mensagemForaDoIf = "Teste1";

  if (mensagemForaDoIf == "Teste1") {
    var mensagemDentroDoIf = "JavaScript"; // a variável foi elevada para o topo do contexto
  }

  console.log(mensagemForaDoIf); // MATERA

  console.log(mensagemDentroDoIf); // JavaScript
};

var exibeMensagem3ComLet = function exibeMensagem3ComLet() {
  var mensagemForaDoIf = "Teste2";

  if (mensagemForaDoIf == "Teste2") {
    var mensagemDentroDoIf = "JS";
    console.log(mensagemDentroDoIf); // imprime JS
  } // mensagemDentroDoIf não é mais acessível a partir deste ponto


  console.log(mensagemForaDoIf); // imprime MATERA
  // apenas mensagemForaDoIf existe nesse ponto
};

exibeMensagem3();
exibeMensagem3ComLet();
void function () {
  var mensagem;
  console.log(mensagem); // Imprime undefined 
  // inicialização default com valor undefined para mensagem 
}();
