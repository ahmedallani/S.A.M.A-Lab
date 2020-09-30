import React from "react";
import axios from "axios";

class Organization_Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name_organization: "",
      description: "",
      field: "",
      serial: "",
    };
  }

  handleChangeName(e) {
    e.preventDefault();

    this.setState({
      name_organization: e.target.value,
    });
  }
  handleChangeDescription(e) {
    e.preventDefault();

    this.setState({ description: e.target.value });
  }
  handleChangeField(e) {
    e.preventDefault();

    this.setState({ field: e.target.value });
  }
  handleChangeSerial(e) {
    e.preventDefault();

    this.setState({ serial: e.target.value });
  }

  handleSubmit() {
    axios
      .post("/create_organization", {
        name: this.state.name_organization,
        description: this.state.description,
        field: this.state.field,
        serial: this.state.serial,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form>
        Organization name:{" "}
        <input
          type="text"
          name={this.state.name_organization}
          onChange={this.handleChangeName.bind(this)}
        />{" "}
        <br></br>
        Description :{" "}
        <input
          type="text"
          descr={this.state.description}
          onChange={this.handleChangeDescription.bind(this)}
        />
        <br></br>
        Field :{" "}
        <input
          type="text"
          fiel={this.state.field}
          onChange={this.handleChangeField.bind(this)}
        />
        <br></br>
        Serial :{" "}
        <input
          type="text"
          ser={this.state.serial}
          onChange={this.handleChangeSerial.bind(this)}
        />
        <br></br>
        <button type="submit" onClick={this.handleSubmit.bind(this)}>
          Add New Organization
        </button>
      </form>
    );
  }
}

export default Organization_Create;
