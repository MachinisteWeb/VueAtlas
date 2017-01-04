(function () {
    var setTodos = function (view, model, editable, callback) {
        return new Vue({
            template: view,
            data: {
                "todos": model,
                "newTitle": "",
                "newDescription": "",
                "editable": editable
            },
            methods: {
                addTodo: function () {
                    this.todos.push({
                        "title": this.newTitle, 
                        "description": this.newDescription 
                    });
                    this.newTitle = "";
                    this.newDescription = "";
                    if (callback) {
                        callback(this.todos);
                    }
                },
                removeTodo: function (index) {
                    this.todos.splice(index, 1);
                    if (callback) {
                        callback(this.todos);
                    }
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