import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import $ from "jquery";

class Nav extends Component {
  state = {};
  componentDidMount() {
    $(document).ready(function () {
      $("._text-hover-scale").hover(
        function () {
          $(this).css({
            transform: "translateX(-100px)",
            "transition-duration": "1.5s",
          });
        },
        function () {
          $(this).css({
            transform: "translateX(0px)",
            "transition-duration": "0.5s",
          });
        }
      );
    });
  }
  render() {
    return (
      <>
        <NavLink
          to="/course"
          className="text-right d-block"
          style={{ textDecoration: "none" }}
          activeClassName="border-right border-danger"
        >
          <p className="_text-hover-scale m-0 py-1 pr-5">courses</p>
        </NavLink>

        <NavLink
          to="/users"
          className="text-right d-block "
          style={{ textDecoration: "none" }}
          activeClassName="border-right border-danger"
        >
          <p className="_text-hover-scale m-0 py-1 pr-5">users</p>
        </NavLink>
      </>
    );
  }
}

export default Nav;
