import React from "react";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

export class App extends React.Component {
  render() {
    return (
      <div className="center">
        <Signup />
      </div>
    );
  }
}

export default App;
