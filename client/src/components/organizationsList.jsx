import React from "react";

class OrganizationsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Basic Card Example</h6>
        </div>
        <div className="card-body">
          <ul>
              <li>Organization 1</li>
              <li>Organization 2</li>
              <li>Organization 3</li>
              <li>Organization 4</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default OrganizationsList;
