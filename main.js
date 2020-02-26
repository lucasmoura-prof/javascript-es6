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
}

const MinhaLista = new TodoList();

// Evento que decteta que o botão foi clicado
document.getElementById('novotodo').onclick = function () {
    MinhaLista.add('Novo todo');
}