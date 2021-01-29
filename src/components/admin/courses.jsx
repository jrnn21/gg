import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddCourse from "./add/addCourses";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Course from "./course";

class Courses extends Component {
  state = {};
  render() {
    const { courses, user } = this.props;
    return (
      <div className="">
        <div className="row">
          <h3 className="col-md-9">All Courses</h3>
          <div className="col-md-3">
            <div className="row justify-content-end">
              <AddCourse />
            </div>
          </div>
        </div>
        <div className="row">
          {courses &&
            courses.map((course) => (
              <NavLink
                to={"/course/" + course.id}
                key={course.id}
                className="col-lg-6 col-xl-4"
                style={{ textDecoration: "none" }}
              >
                <Course
                  course={course}
                  user={user && user ? user[course.createdBy] : null}
                />
              </NavLink>
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const courses = state.firestore.ordered.course;
  const user = state.firestore.data.users;
  return {
    courses,
    user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "course",
      orderBy: ["date", "desc"],
    },
    {
      collection: "users",
    },
  ])
)(Courses);
