import * as APIService from './api'
import React from 'react'
function SimpleAPIForm() {
  const [state, setState] = React.useState({
    message: '',
    post: ''
  });
  const handleSubmit = async e => {
    e.preventDefault();
    const response = await APIService.getData(state.post);
    if(response.ok) {
      setState({
        message: 'posted successfully',
        post: ''
      })
    }
  }
  const updateEmail = e => {
    e.preventDefault();
    setState({...state, post: e.target.value})
  }
  return (
    <div className="App">
      {state.message ? <h1>{state.message}</h1> : null}
      <form onSubmit={handleSubmit}>
        <label>
            Body:
          <input type="text" value={state.post} onChange={updateEmail} />
        </label>
        <br />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
}
export default SimpleAPIForm;