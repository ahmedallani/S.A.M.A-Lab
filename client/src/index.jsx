import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Home from "./components/home.jsx";

export class App extends React.Component {
  render() {
    return (
      <Home />
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
