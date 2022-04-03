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
            console.log(todo)
            todo.completed = !todo.completed;
        },
        addTodo(title) {
            const newTodo = { title, completed: false, id: this.nextId }
            this.todos.push(newTodo)
            this.nextId++
        },
        removeTodo(todo) {
            const indexOfTodo = this.todos.findIndex(_todo => _todo.id === todo.id)
            this.todos.splice(indexOfTodo, 1)
        }
    },
    computed: {
        unfinishedTodosLeft() {
            let unfinishedTodosLeft = 0;
            this.todos.forEach(todo => {
                if (todo.completed === false) {
                    unfinishedTodosLeft++
                }
            })
            return unfinishedTodosLeft
        },
        unfinishedTodos() {
            return this.todos.filter(todo => todo.completed === false)
        },
        finishedTodos() {
            return this.todos.filter(todo => todo.completed === true)
        },
        isEmpty() {
            const numberOfTodos = this.todos.length
            if (numberOfTodos > 0) {
                return true;
            } else return false;
        }
    }
}).mount('#app')