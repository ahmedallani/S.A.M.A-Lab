<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
=======
import ReactDOM from "react-dom";
import React from "react";
>>>>>>> c2bc32deeebf4f196d8657c4e7f25d1048091dd1
import App from "./components/App.jsx";

export class Index extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}
ReactDOM.render(<Index />, document.getElementById("app"));
