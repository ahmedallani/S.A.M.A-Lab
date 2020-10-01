import React from "react";
<<<<<<< HEAD
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import Home from "./home.jsx";

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      redirected: null,
    };
    this.takeusername = this.takeusername.bind(this);
  }

  takeusername(user, path) {
    this.setState({
      username: user,
      redirected: path,
    });
    console.log(this.state);
  }

  render() {
    if (this.state.redirected === null) {
      return (
        <div>
          <Signup func={this.takeusername} />
        </div>
      );
    } else if (this.state.redirected === "/login")
      return (
        <div>
          <Login func={this.takeusername} />
        </div>
      );
    else if (this.state.redirected === "/home") {
      return (
        <div>
          <Home username={this.state.username} />
        </div>
      );
    }
=======
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";

export class App extends React.Component {
  render() {
    return (
      <div className="center">
        <Login />
      </div>
    );
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
  }
}

export default App;
