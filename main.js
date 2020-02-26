class TodoList {
    // Primeiro método a ser executado ao instanciar um novo objeto da classe
    constructor() {
        // ações que disparam assim que o objeto for criado
        // iniciar variáveis
        this.todos = [];
    }

    addTodo() {
        this.todos.push('Novo todo');
        console.log(this.todos);
    }
}

const MinhaLista = new TodoList();

// Evento que decteta que o botão foi clicado
document.getElementById('novotodo').onclick = function () {
    MinhaLista.addTodo();
}