import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AuthLink from "./authLink";
import MyCourseLink from "./myCourseLink";
import NavItems from "./navItems";

class Navbar extends Component {
  state = {
    drop: false,
  };

  dropdown = () => {
    this.state.drop = !this.state.drop;
    if (this.state.drop) {
      document.querySelector(".dropbox").classList.remove("on");
    } else {
      document.querySelector(".dropbox").classList.add("on");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="_navbar">
          <nav className="navbar navbar-expand-md shadow bg-white">
            <div className="container-fluid _bg-body pl-2">
              <NavLink to="/" className="navbar-brand branding logo brand_name">
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="bi bi-code-slash"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  className="d-inline-block align-top mr-3 mt-1"
                  style={{ transform: "scale(1.7,1.7)" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"
                  />
                </svg>
                <span className="d-none d-lg-inline-block">
                  CODING CAMBODIA
                </span>
                <span className="d-inline-block d-lg-none">C-CAMBO</span>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarToggle"
              >
                <span className="navbar-toggler-icon">
                  <i className="fas fa-bars mt-1"></i>
                </span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggle">
                <div className="navbar-nav mr-auto ml-auto"></div>
                <div className="navbar-nav">
                  <MyCourseLink />
                  <NavItems />
                  <AuthLink />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}

export default Navbar;
