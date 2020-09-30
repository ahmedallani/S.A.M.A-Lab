import $ from "jquery";
import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login.jsx";
import Signup from "./components/signup.jsx";
import Home from "./components/home.jsx";

export class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">From developpers to developpers</h1>
          <p className="lead">
            A tool for teams and organisation to success your project
          </p>
          <hr className="my-4" />
          <button type="button" class="btn btn-primary btn-lg">
            Large button
          </button>
          <button type="button" class="btn btn-secondary btn-lg">
            Large button
          </button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
