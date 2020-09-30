import ReactDOM from "react-dom";
import Project from './components/projects.jsx';
import Organization_Create from "./components/Organization_Create.jsx"
import React from "react";
import LanPage from "./components/LanPage.jsx";
class App extends React.Component {
 



  render() {
    return (
      <div>
        <LanPage />
        {/* <Project />
        <Organization_Create /> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
