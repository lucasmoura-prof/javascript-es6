const usuario = { 
    nome: 'Joao', 
    idade: 25, 
    endereco: {
        cidade: 'Ituiutaba',
        estado: 'MG',
    }
};

console.log(usuario);
//
/*const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;*/

// Desestruturação aplicado no ES6+
const { nome, idade, endereco: { cidade } } = usuario; // lado esquerdo fala as propriedades
console.log(nome, idade);
console.log(cidade);


// Pode ser usado em vários locais
/*function mostrarNome(usuario) {
    console.log(usuario.nome);
}*/

function mostrarNome({ nome, idade }) {
    console.log(nome);
    console.log(idade);
}

mostrarNome(usuario);


// Operadores rest e spread
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

const meuUsuario = { 
    nomeUsuario: 'Joao', 
    idade: 25, 
    endereco: {
        cidade: 'Ituiutaba',
        estado: 'MG',
    }
};

const { nomeUsuario, ...resto } = meuUsuario;
console.log(nomeUsuario);
console.log(resto);

// Podemos aplicar o REST em vetores também
const array = [1, 2, 3, 4];

const [ primeiro, segundo, ...restanteArray ] = array;
console.log(primeiro);
console.log(segundo);
console.log(restanteArray);

// usando em parâmetros de funções
/*function soma (a, b) {
    return a + b;
}*/

// Se quisesse adicionar mais um parâmetro, teria que colocar:
/*function soma (a, b, c) {
    return a + b + c;
}*/

// Para adicionar o 4 parametro???
function soma (...params) {
    //return params; // converte os parâmetros que enviamos em array
    return params.reduce((total, next) => total + next);
}

/*function soma (a, b, ...resto) {
    //return params; // converte os parâmetros que enviamos em array
    return params.reduce((total, next) => total + next);
}*/

console.log(soma(1, 3, 4));

// SPREAD (propagar as informações de um objeto/array) para outra estrutura de dados
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// juntar os 2 arrays sem usar funções
const array3 = [ ...array1, ...array2];
console.log(array3);

const user1 = {
    nome: 'Joao',
    idade: 23,
    empresa: 'IFTM'
};

const user2 = { ...user1, nome: 'Lucas' };

console.log(user2);



// Template Literals
const fullName = 'Uzumaki Naruto';
const age = 22;

//
//console.log('Meu nome é ' + fullName + ' e tenho ' + age + ' anos');
console.log(`Meu nome é ${fullName} e tenho ${age} anos!`); // usando sinal de crase

