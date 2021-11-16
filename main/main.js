/**
 * Vue todo app
 */

const app = new Vue ({
    el: '#app',
    data: {
        todos: [
            {
                text: 'Terminare web app',
                completed: false,
            },
            {
                text: 'Fare la spesa',
                completed: true,
            },
            {
                text: 'fare il bucato',
                completed: false,
            },
        ],
        newTodo: '',
    },
    methods: {
        /**
         * Add new todo to list
         */
        addTodo() {
            if(this.newTodo !== '') {
                console.log(this.newTodo);

                //Aggiunta nuovo todo a todos
                //creo il nuovo todo
                const newTodo = {
                    text: this.newTodo,
                    completed: false,
                }
                //Lo aggiungo all'array todos 
                this.todos.push(newTodo);

                //clean up dopo l'inserimento
                this.newTodo = '';

                //set focus
                //bisogna far rimanere il focus sulla barra di input
                //in quanto quando viene cliccato il bottone enter
                //o viene cliccato da tasitera il fouc va su di essi..
                console.log(this.$refs.todoInput);
                this.$refs.todoInput.focus();

            }
        },

        /**
         * Remove Todo from list
         */
        removeTodo(indexTodo) {
            console.log(indexTodo);
            //entra nel todos, prendi l'indice index Todo,
            //cancella solo lui (1) 
            this.todos.splice(indexTodo, 1);
        },

        /**
         * Update completed todo
         */
        updateStatus(indexTodo) {
            // 1 if 
            if(this.todos[indexTodo].completed) {
                this.todos[indexTodo].completed = false;
            } else {
                this.todos[indexTodo].completed = true;
            }

            // 2 operatore ternario
            //this.todos[indexTodo].completed = this.todos[indexTodo].
            //completed ? false : true;

            //3 negazione di se stesso
            //this.todos[indexTodo].completed = this.todos[indexTodo].completed;


        }
    }
});