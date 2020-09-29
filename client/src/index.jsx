import ReactDOM from "react-dom";
import Project from './components/projects.jsx';
import Organization_Create from "./components/Organization_Create.jsx"
import React from "react";

class App extends React.Component {
 



  render() {
    return (
      <div>
        <Project />
        <Organization_Create />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
