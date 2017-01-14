var todosSource = document.getElementsByClassName("todo-list")[0];

new Vue({
    el: todosSource,
    data: {
        "todos": JSON.parse(todosSource.getAttribute("data-model")),
        "newTitle": "",
        "newDescription": ""
    },
    methods: {
        addTodo: function () {
            this.todos.push({
                "title": this.newTitle, 
                "description": this.newDescription 
            });
            this.newTitle = "";
            this.newDescription = "";
        },
        removeTodo: function (index) {
            this.todos.splice(index, 1);
        }
    }
});