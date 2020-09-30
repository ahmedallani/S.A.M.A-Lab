import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import DashBoard from "./components/DashBoard.jsx";



export class App extends React.Component {
  render() {
    return (
      <DashBoard />
    );
  }
};

ReactDOM.render(<App />, document.getElementById("app"));
