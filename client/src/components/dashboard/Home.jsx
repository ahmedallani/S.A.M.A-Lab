import React from "react";

class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1 className="h3 mb-4 text-gray-800">Home</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Your organizations
                </h6>
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
          </div>
          <div className="col-lg-6">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">
                  Your projects
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
        </div>
      </div>
    );
  }
}
export default Home;
