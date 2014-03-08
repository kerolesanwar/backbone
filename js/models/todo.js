/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	// Todo Model
	// ----------
	var currentDate = new Date();
	// Our basic **Todo** model has `title`, `order`, and `completed` attributes.
	app.Todo = Backbone.Model.extend({
		// Default attributes for the todo
		// and ensure that each todo created has `title` and `completed` keys.
		defaults: {
			title: '',
			completed: false,
			date: currentDate.getMonth()+1 + '/' + currentDate.getDate() + '/' + currentDate.getFullYear()
		},

		// Toggle the `completed` state of this todo item.
		toggle: function () {
			this.save({
				completed: !this.get('completed')
			});
		}
	});
})();
