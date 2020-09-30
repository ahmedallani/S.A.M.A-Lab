import React from "react";
import {Switch, Route} from "react-router-dom";
import OrganizationsList from "./organizationsList.jsx";
import AddOrganization from "./addOrganization.jsx";


var Content = () => (
  <div>
    <h1 className="h3 mb-4 text-gray-800">Blank Page</h1>
    <Switch>
      <Route exact path="/organizations">
        <OrganizationsList />
      </Route>
      <Route path="/organizations/new">
        <AddOrganization />
      </Route>
    </Switch>
  </div>
);

export default Content;
