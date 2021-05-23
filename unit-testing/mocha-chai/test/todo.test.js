var expect = require('chai').expect;
const Todo = require('../src/lib/todos');
const fs = require('fs');

describe('Todo Library', function() {
	describe('todo function : happy Path', function() {
		it('simple todo functions', function() {
			const todo = new Todo();
			todo.add('1');
			todo.add('2');
			todo.add('3');
			expect(todo.list()).to.not.equal(null);
			expect(todo.list().length).to.equal(3);
			expect(todo.list()).to.deep.equal([
				{ title: '1', completed: false },
				{ title: '2', completed: false },
				{ title: '3', completed: false }
			]);
		});
    it('simple todo functions', function() {
			const todo = new Todo();
			todo.add('1');
			expect(todo.list()).to.not.equal(null);
			expect(todo.list().length).to.equal(1);
			expect(todo.list()).to.deep.equal([
				{ title: '1', completed: false }
			]);
      todo.complete('1');
      expect(todo.list()).to.deep.equal([
				{ title: '1', completed: true }
			]);
      todo.add('2');
      expect(todo.list()).to.deep.equal([
				{ title: '1', completed: true },
        { title: '2', completed: false }
			]);
		});
	});

});
