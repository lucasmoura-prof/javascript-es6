class Matematica {
    // método estáticos trás informações não relacionadas ao objeto
    // geralmente nem vai ter constructor, só para acessar as funcionalidades
    static soma(valueA, valueB) {
        return valueA + valueB;
    }
}

class List {
    constructor() {
        this.data = [];
    }

    add(value) {
        this.data.push(value);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super(); // chamar o método constructor da classe pai (List)

        this.user = 'Joao';
    }

    showUser() {
        console.log(this.user);
    }
}

var MinhaLista = new TodoList();

// Evento que decteta que o botão foi clicado
document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.showUser();

console.log(Matematica.soma(1, 2));
