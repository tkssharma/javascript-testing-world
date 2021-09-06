import React, { useEffect, useState } from "react";

const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos/";

const Todo = ({ title, id }) => {
  return (
    <div className="message-container">
      <p data-testid={`todo-paragraph-${id}`}>{title}"</p>
    </div>
  );
};

const App = ({ axiosClient }) => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () =>
    axiosClient.get(TODOS_ENDPOINT).then(({ data }) => setTodos(data));

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <button onClick={fetchTodos}>Renew</button>
      <div data-testid="message-list">
        {todos.map((todo, index) => (
          <Todo key={index} title={todo.title} id={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
