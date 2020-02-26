"use strict";

var a = 1;
var user = {
  name: 'Lucas'
}; //a = 3; // vai dar erro porque a é read-only

user.name = 'Joao';
console.log(user.name);
