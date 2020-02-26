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
