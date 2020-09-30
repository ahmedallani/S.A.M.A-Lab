import React from "react";
import { Switch, Route } from "react-router-dom";
import OrganizationsList from "./OrganizationsList.jsx";
import AddOrganization from "./AddOrganization.jsx";
import ProjectsList from "./ProjectsList.jsx"
import AddProject from "./AddProject.jsx";
import Home from "./Home.jsx";

var Content = () => (
  <div>
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/organizations">
        <OrganizationsList />
      </Route>
      <Route path="/organizations/new">
        <AddOrganization />
      </Route>
      <Route exact path="/projects/">
        <ProjectsList />
      </Route>
      <Route path="/projects/new">
        <AddProject />
      </Route>
    </Switch>
  </div>
);

export default Content;
