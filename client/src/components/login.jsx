import React from "react";
import axios from "axios";

<<<<<<< HEAD
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
      nextpath: "/home",
=======
export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
<<<<<<< HEAD
=======

>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
  handleChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

<<<<<<< HEAD
  handleSubmit(e) {
    e.preventDefault();
    axios
      .post("/login", this.state)
      .then((res) => {
        if (res.data === true) {
          this.props.func(this.state.username, this.state.nextpath);
        } else {
          this.props.func(null, "/login");
        }
=======
  handleSubmit() {
    axios
      .post("/login", this.state)
      .then((response) => {
        console.log(response);
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.state);
    return (
<<<<<<< HEAD
      <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Log in</h2>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              required="required"
              name="username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
              name="password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Log in
            </button>
          </div>
        </form>
        <p className="text-center">
          <a href="/users" onClick={() => {}}>
            Create an Account
          </a>
        </p>
=======
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" onChange={this.handleChange} />
          <label htmlFor="password">password</label>
          <input type="password" name="password" onChange={this.handleChange} />
          <input type="submit" value="submit" />
        </form>
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
      </div>
    );
  }
}

export default Login;
