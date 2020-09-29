import ReactDOM from "react-dom";
import React from "react";
import Login from "./components/login.jsx";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Login />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
