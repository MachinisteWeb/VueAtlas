var todoList = function (editable) {
	$.ajax({
	  url: "data/todo-list.json"
	}).done(function (model) {
		$.ajax({
		  url: "view-model/todo-list.htm"
		}).done(function (view) {
			var todos = setTodos(view, model, editable, function (value) {
				console.log("send");
				NA.socket.emit("update-todo", value);
			});
			todos.$mount(".todo-list");
			NA.socket.on("update-todo", function (value) {
				console.log("received");
				todos.todos = value;
			});
		});
	});
};