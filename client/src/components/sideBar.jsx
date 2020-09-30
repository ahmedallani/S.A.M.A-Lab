import React from "react";
import Switch from "react-bootstrap/esm/Switch";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


var SideBar = () => (
  <ul
    className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    {/* Sidebar - Brand */}
    <a
      className="sidebar-brand d-flex align-items-center justify-content-center"
      href="index.html"
    >
      <div className="sidebar-brand-icon rotate-n-15">
        <i className="fas fa-laugh-wink"></i>
      </div>
      <div className="sidebar-brand-text mx-3">SAMA-LAB</div>
    </a>

    {/* Divider */}
    <hr className="sidebar-divider my-0" />

    {/* Nav Item - Dashboard */}
    <li className="nav-item">
      <a className="nav-link" href="index.html">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span>
      </a>
    </li>

    {/* Divider */}
    <hr className="sidebar-divider" />

    {/* Heading */}
    <div className="sidebar-heading">Interface</div>

    {/* Nav Item - Pages Collapse Menu */}
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseTwo"
        aria-expanded="true"
        aria-controls="collapseTwo"
      >
        <i className="fas fa-fw fa-cog"></i>
        <span>My organizations</span>
      </a>

      <div
        id="collapseTwo"
        className="collapse"
        aria-labelledby="headingTwo"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Organizations:</h6>
          <Link to="/organizations" className="collapse-item">
            Show all
          </Link>
          <Link to="/organizations/new" className="collapse-item">
            Add new
          </Link>
        </div>
      </div>
    </li>

    {/* Nav Item - Utilities Collapse Menu */}
    <li className="nav-item">
      <a
        className="nav-link collapsed"
        href="#"
        data-toggle="collapse"
        data-target="#collapseUtilities"
        aria-expanded="true"
        aria-controls="collapseUtilities"
      >
        <i className="fas fa-fw fa-wrench"></i>
        <span>My projects</span>
      </a>
      <div
        id="collapseUtilities"
        className="collapse"
        aria-labelledby="headingUtilities"
        data-parent="#accordionSidebar"
      >
        <div className="bg-white py-2 collapse-inner rounded">
          <h6 className="collapse-header">Projects:</h6>
          <a className="collapse-item" href="utilities-color.html">
            Show all
          </a>
          <a className="collapse-item" href="utilities-border.html">
            Add new
          </a>
        </div>
      </div>
    </li>

    {/* Divider */}
    <hr className="sidebar-divider" />

    {/* Sidebar Toggler (Sidebar) */}
    <div className="text-center d-none d-md-inline">
      <button className="rounded-circle border-0" id="sidebarToggle"></button>
    </div>
  </ul>
);

export default SideBar;
