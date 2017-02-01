/* jshint node: true */
exports.changeDom = function (next, locals) {
	var NA = this,
		Vue = require("vue"),
		renderers = require("vue-server-renderer"),
		renderer = renderers.createRenderer(),
		path = NA.modules.path,
		fs = NA.modules.fs,
		view = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "partials/todo-list.htm"),
		model = path.join(NA.serverPath, NA.webconfig.viewsRelativePath, "partials/todo-list.js"),
		data = path.join(NA.serverPath, "data/todo-list.json");

	global.Vue = Vue;

	fs.readFile(view, "utf-8", function (error, view) {
		fs.readFile(data, "utf-8", function (error, data) {
			renderer.renderToString(require(model)(view, JSON.parse(data)), function (error, html) {
				locals.dom = locals.dom.replace('<section class="todo-list"></section>', html.replace('server-rendered="true"', ""));
				next();
			});
		});
	});
};

exports.setSockets = function () {
	var NA = this,
		fs = NA.modules.fs,
		io = NA.io;

	io.sockets.on("connection", function (socket) {
		socket.on("update-todo", function (todos) {
			fs.writeFile("data/todo-list.json", JSON.stringify(todos), function () {
				socket.broadcast.emit("update-todo", todos);
			});
		});
	});
};