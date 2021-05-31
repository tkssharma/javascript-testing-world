import React from 'react';
function App() {
  const [state, setState] = React.useState({
    name: '',
    age: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
  }
  const updateName = e => {
    e.preventDefault();
    setState({...state, name: e.target.value})
  }
  const updateAge = e => {
    e.preventDefault();
    setState({...state, age: e.target.value})
  }
  return (
    <div className="App">
      <h1>Welcome {state.name}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={state.name} onChange={updateName} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" value={state.age} onChange={updateAge} />
        </label>
        <br />
        <input type="submit" value="Submit" disabled={state.name === ''}/>
      </form>
    </div>
  );
}
export default App;