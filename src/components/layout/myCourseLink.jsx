import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class MyCourseLink extends Component {
  state = {};

  render() {
    const { uid } = this.props;
    if (uid) {
      return (
        <>
          <NavLink
            to="/mycourses"
            className="nav-item nav-link"
            activeClassName="_nav-active"
          >
            Mycourses
          </NavLink>
        </>
      );
    } else {
      return <></>;
    }
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;

  return {
    uid: uid,
  };
};

export default connect(mapStateToProps)(MyCourseLink);
