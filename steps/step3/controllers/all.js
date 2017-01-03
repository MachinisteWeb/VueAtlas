/* jshint node: true */
exports.changeDom = function (next, locals, request, response) {
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
				response.send(locals.dom.replace('<section class="todo-list"></section>', html.replace('server-rendered="true"', "")));
			});
		});
	});
};