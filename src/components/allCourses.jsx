import React, { Component } from "react";
import Courses from "./courses";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class AllCourses extends Component {
  state = {};
  render() {
    const { courses } = this.props;
    console.log(courses);
    if (courses && courses.length !== 0)
      return (
        <div className="container-fluid m-0 p-0">
          <Courses courses={courses} allCourses={true} />
        </div>
      );
    return <h1 className="text-center mt-5s">No Courses Available!</h1>;
  }
}

const mapStateToProps = (state) => {
  const courses = state.firestore.ordered.course;
  console.log(courses);
  return {
    courses: courses,
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
      collection: "watched",
    },
  ])
)(AllCourses);
