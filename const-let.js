const a = 1;
const user = { name: 'Lucas' };

//a = 3; // vai dar erro porque a é read-only

user.name = 'Joao';
console.log(user.name);

function test(x) {
    let y = 2;

    if (x > 5) {
        let y = 4;
        console.log(x, y);
    }
}

// console.log(y); // erro: y não definido, escopos diferentes

test(10);

