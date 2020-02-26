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

const MinhaLista = new TodoList();

// Evento que decteta que o botão foi clicado
document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}

MinhaLista.showUser();