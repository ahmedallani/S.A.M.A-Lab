import React from "react";
import axios from "axios";

export class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      password: "",
      username: "",
      email: "",
      title: "",
      role: "",
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
    console.log(this.state);
    axios
      .post("/users", this.state)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
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
        </form>
      </div>
    );
  }
}

export default Signup;
