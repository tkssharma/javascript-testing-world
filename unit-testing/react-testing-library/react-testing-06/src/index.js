import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./LoginForm";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <LoginForm onSubmit={() => console.log("test")} />
    </div>
  </React.StrictMode>,
  rootElement
);
