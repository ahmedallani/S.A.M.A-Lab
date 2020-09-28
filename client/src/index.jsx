import ReactDOM from "react-dom";
import Project from './components/projects.jsx';
import React from "react";

export class App extends React.Component {
  render() {
    return (
      <div>
        <Project />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
