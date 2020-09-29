import React from "react";
import axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  handleChangePass(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleSubmit() {
    axios
      .post("/login", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>username</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleChangeName}
          />
          <label>password</label>
          <input
            type="text"
            value={this.state.password}
            onChange={this.handleChangePass}
          />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
