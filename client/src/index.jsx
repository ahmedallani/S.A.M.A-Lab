import ReactDOM from "react-dom";
import Organization_Create from "./components/Organization_Create.jsx"
import React from "react";

class App extends React.Component {
 



  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <Organization_Create />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
