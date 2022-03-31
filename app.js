Vue.createApp({
    data() {
        return {
            todos: [
            ],
            todoTitle: "",
            nextId: 0,
        }
    },
    methods: {
        toggleTodo(todo) {
            todo.completed = !todo.completed;
        },
        addTodo(title) {
            const newTodo = { title, completed: false, id: this.nextId }
            this.todos.push(newTodo)
            this.nextId++
        },
        removeTodo(todo) {
            console.log("todo id", todo.id)
            const indexOfTodo = this.todos.findIndex(_todo => _todo.id === todo.id)
            console.log(indexOfTodo)
            this.todos.splice(indexOfTodo, 1)
        }
},
computed: {
    unfinishedTodos() {
        let unfinishedTodos = 0;
        this.todos.forEach(todo => {
            if(todo.completed === false) {
                unfinishedTodos++
            }
        });
        return unfinishedTodos;
    }
}
}).mount('#app')