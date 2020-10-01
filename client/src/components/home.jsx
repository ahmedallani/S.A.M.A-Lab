import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar.jsx";
class home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>home</h1>
    <span>welcome {this.props.username}</span>
      </div>
    );
  }
}

export default home;
