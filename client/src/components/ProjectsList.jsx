import React from "react";

class ProjectsList extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Projects List:</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Basic Card Example
            </h6>
          </div>
          <div className="card-body">
            <ul>
              <li>Project 1</li>
              <li>Project 2</li>
              <li>Project 3</li>
              <li>Project 4</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsList;
