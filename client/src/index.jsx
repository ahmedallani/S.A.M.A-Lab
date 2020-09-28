import ReactDOM from "react-dom";

import React from "react";

export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world</h1>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
