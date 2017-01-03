var todoList = function (client) {
	$.ajax({
	  url: "data/todo-list.json"
	}).done(function (model) {
		$.ajax({
		  url: "view-model/todo-list.htm"
		}).done(function (view) {
			var todos = setTodos(view, model, client),
				lastLength;
			todos.$mount(".todo-list");
	        todos.$watch("todos", function (newVal) {
	        	if (newVal.length !== lastLength) {
		  			NA.socket.emit("update-todo", newVal);
	        	}
		  		lastLength = newVal.length;
			});
			NA.socket.on("update-todo", function (newVal) {
				todos.todos = newVal;
			});
		});
	});
};