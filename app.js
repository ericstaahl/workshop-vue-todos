Vue.createApp({
    data() {
        return {
            todos: [
                { title: "todo1", completed: false },
                { title: "todo2", completed: false },
                { title: "todo3", completed: false },
                { title: "todo4", completed: false },
            ],
            todoTitle: "",
        }
    },
    methods: {
        toggleTodo(todo) {
            todo.completed = !todo.completed;
        },
        addTodo(title) {
            const newTodo = { title, completed: false }
            this.todos.push(newTodo);
        }
}
}).mount('#app')