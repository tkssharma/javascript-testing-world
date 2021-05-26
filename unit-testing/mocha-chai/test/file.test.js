var expect = require('chai').expect;
const Todo = require('../src/lib/todos');
const fs = require('fs');

describe('save file : happy Path', () => {
	let todo;
	beforeEach(() => {
		todo = new Todo();
		todo.add('save a file');
	});
	afterEach(() => {
		if (fs.existsSync('todos.csv')) {
			fs.unlinkSync('todos.csv');
		}
	});

	it('save file function TODO without error', async () => {
		await todo.saveFile();
    expect(fs.existsSync('todos.csv')).to.equal(true);
		let expectedFileContents = 'Title,Completed\nsave a file,false\n';
		let content = fs.readFileSync('todos.csv').toString();
		expect(expectedFileContents).to.equal(content);
	});

  it('save file function TODO without error', async () => {
    todo.complete('save a file');
		await todo.saveFile();
    expect(fs.existsSync('todos.csv')).to.equal(true);
		let expectedFileContents = 'Title,Completed\nsave a file,true\n';
		let content = fs.readFileSync('todos.csv').toString();
		expect(expectedFileContents).to.equal(content);
	});
});
