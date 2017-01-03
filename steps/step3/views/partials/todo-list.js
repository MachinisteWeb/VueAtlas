(function () {
    var setTodos = function (view, model, client) {
        return new Vue({
            template: view,
            data: {
                "todos": model,
                "newTitle": "",
                "newDescription": "",
                "client": client
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
    };
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = setTodos;
    } else {
        this.setTodos = setTodos;
    }
}).call(this);