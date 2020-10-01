import React from "react";
import axios from "axios";

<<<<<<< HEAD
class Signup extends React.Component {
=======
export class Signup extends React.Component {
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      username: "",
<<<<<<< HEAD
      repPassword: "",
      nextpath: "/home",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkPass = this.checkPass.bind(this);
  }

  checkPass() {
    if (this.state.password !== this.state.repPassword) {
      console.log("wrong pass");
      this.setState({
        password: null,
      });
      return;
    }
  }

=======
      email: "",
      title: "",
      role: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
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
    if (this.state.password !== this.state.repPassword) {
      alert("the pass must be the same");
      return false;
    }
=======
  handleSubmit() {
    console.log(this.state);
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
    axios
      .post("/users", this.state)
      .then((res) => {
        console.log(res);
<<<<<<< HEAD
        this.props.func(this.state.username, this.state.nextpath);
=======
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    console.log(this.props.func);
    return (
<<<<<<< HEAD
      <div className="signup-form">
        <form onSubmit={this.handleSubmit}>
          <h2 className="text-center">Sign up</h2>
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
              type="text"
              className="form-control"
              placeholder="First name"
              required="required"
              name="first_name"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              required="required"
              name="last_name"
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
            <input
              type="password"
              className="form-control"
              placeholder="Repeat password"
              required="required"
              name="repPassword"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Sign up
            </button>
            <a
              onClick={() => {
                this.props.func(this.state.username, "/login");
              }}>
              already have an Account
            </a>
          </div>
=======
      <div>
        <h1>SignUp</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">username</label>
          <input type="text" name="username" onChange={this.handleChange} />
          <br />
          <label htmlFor="first_name">first_name</label>
          <input type="text" name="first_name" onChange={this.handleChange} />
          <br />
          <label htmlFor="last_name">last_name</label>
          <input type="text" name="last_name" onChange={this.handleChange} />
          <br />
          <label htmlFor="email">email</label>
          <input type="text" name="email" onChange={this.handleChange} />
          <br />
          <label htmlFor="password">password</label>
          <input type="text" name="password" onChange={this.handleChange} />
          <input type="submit" value="submit" />
>>>>>>> 7c7bca0e8e831b4e1772c60a519ec1608fb39539
        </form>
      </div>
    );
  }
}

export default Signup;
