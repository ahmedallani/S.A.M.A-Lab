import React from "react";

class OrganizationsList extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Organizations List:</h1>
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Basic Card Example
            </h6>
          </div>
          <div className="card-body">
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default OrganizationsList;
