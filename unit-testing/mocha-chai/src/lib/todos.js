const fs = require('fs').promises;
class Todo {
	constructor() {
		this.todos = [];
	}
	list() {
		return [ ...this.todos ];
	}
	add(title) {
		const todo = {
			title,
			completed: false
		};
		this.todos.push(todo);
	}
	complete(title) {
		const found = this.todos.find((i) => i.title === title);
		if (!found) {
			throw new Error('todo item not found');
		}
		this.todos = this.todos.map((i) => {
			if (i.title === title) {
				i.completed = true;
			}
			return i;
		});
	}
	async saveFile() {
		let content = 'Title,Completed\n';
		this.todos.forEach((todo) => {
			content += `${todo.title},${todo.completed}\n`;
		});
		return fs.writeFile('todos.csv', content);
	}
}

module.exports = Todo;
