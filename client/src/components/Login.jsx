import React from "react";
import axios from "axios";

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
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
          <label htmlFor="username">username</label>
          <input type="text" name="username" onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
