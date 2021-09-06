import React, { useState } from "react";
import TestHook from "./components/test_hook";
import TestHookReducer from "./components/test_hook_reducer";
import TestHookContext from "./components/test_hook_context";
import HooksForm1 from "./components/test_hook_form";
import TestAxios from "./components/test_axios";

import Context from "./store/context";

const App = () => {
  const [state, setState] = useState("Some Text");
  const [name, setName] = useState("Moe");

  const changeText = () => {
    setState("Some Other Text");
  };

  const changeName = () => {
    setName("Steve");
  };

  return (
    <div className="App">
      <h1> Basic Hook useState </h1>
      <TestHook name={name} changeName={changeName} />
      <h1> Basic Hook useReducer</h1>
      <TestHookReducer />
      <h1> Basic Hook useContext</h1>
      <Context.Provider
        value={{ changeTextProp: changeText, stateProp: state }}
      >
        <TestHookContext />
      </Context.Provider>
      <HooksForm1 />
      <TestAxios url="https://jsonplaceholder.typicode.com/posts/1" />
    </div>
  );
};

export default App;
