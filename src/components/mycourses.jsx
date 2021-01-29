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
    if (courses.length === 0) {
      return <h1 className="text-center mt-5">You've no courses!</h1>;
    } else {
      return (
        <div className="container-fluid m-0 p-0">
          <Courses courses={courses} allCourses={false} />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const courses = state.firestore.ordered.course;
  const enroll = state.firestore.ordered.enroll;
  const mycourses = [];

  if (enroll && courses) {
    for (const [key, value] of Object.entries(enroll)) {
      for (const [ckey, cvalue] of Object.entries(courses)) {
        if (value.cid === cvalue.id) {
          mycourses.push(cvalue);
        }
      }
    }
  }

  // console.log(mycourses.length);

  return {
    courses: mycourses,
    uid: state.firebase.auth.uid,
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
      collection: "enroll",
      where: ["uid", "==", ownProps.uid],
      orderBy: ["date", "desc"],
    },
    {
      collection: "watched",
    },
  ])
)(AllCourses);
