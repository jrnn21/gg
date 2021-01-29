import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class NavItems extends Component {
  state = {};
  render() {
    return (
      <>
        <NavLink
          to="/courses"
          className="nav-item nav-link"
          activeClassName="_nav-active"
        >
          Courses
        </NavLink>
        <NavLink
          to="/blog"
          className="nav-item nav-link"
          activeClassName="_nav-active"
        >
          Blog
        </NavLink>
        <NavLink
          to="/donate"
          className="nav-item nav-link"
          activeClassName="_nav-active"
        >
          Donate
        </NavLink>
      </>
    );
  }
}

export default NavItems;
