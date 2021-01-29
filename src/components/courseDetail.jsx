import React, { Component } from "react";
import Course_description from "./subcomponent/course_description";
import Course_content from "./subcomponent/course_content";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { enroll } from "../actions/courseActions";
import { Redirect, NavLink } from "react-router-dom";

class CourseDetail extends Component {
  state = {};
  render() {
    const {
      course,
      cid,
      enroll,
      enrolled,
      uid,
      videoID,
      videosCourse,
    } = this.props;

    const to = "/mycourses/" + cid + "/video/" + videoID;
    if (enrolled && videoID) return <Redirect to={to} />;
    if (course && enrolled === false) {
      return (
        <div className="mx-auto">
          <div className="text-light m-0 p-4" style={{ background: "black" }}>
            <div className="row mx-auto" style={{ maxWidth: "1500px" }}>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <p>
                  development
                  <span className="_text-sea">
                    <i className="fas fa-angle-right mx-2"></i>{" "}
                  </span>
                  programming
                </p>
                <h2 className="_text-sea">{course.title && course.title}</h2>
                <p className="ml-5" style={{ fontSize: "19px" }}>
                  {course.description && course.description}
                </p>
                <p className="">
                  <span>
                    <i className="fas fa-user-edit _text-sea mr-2"></i>
                    Create by <span className="_text-sea">Vy Vannak</span>
                  </span>
                  <br />
                  <span className="d-flex flex-wrap">
                    <span>
                      <i className="fas fa-upload _text-sea mr-2"></i>
                      <span className="ml-1">Uploaded</span>{" "}
                      <span className="_text-sea mr-4">12/1/2020</span>
                    </span>
                    <span>
                      <i className="fas fa-globe-asia mr-2 _text-sea"></i>
                      <span className="_sr-font">ភាសាខ្មែរ</span>
                    </span>
                  </span>
                </p>
                <div className="row">
                  <div className="col-md-5">
                    {uid ? (
                      <button
                        type="button"
                        className="w-100 btn border bg-danger _text-sea _border-sea _border-sea-hover px-3 text-light mr-2 mb-1"
                        onClick={() => enroll(cid)}
                      >
                        Enroll this Course
                        <i className="fas fa-window-restore ml-2"></i>
                      </button>
                    ) : (
                      <NavLink
                        type="button"
                        className="w-100 btn border bg-danger _text-sea _border-sea _border-sea-hover px-3 text-light mr-2 mb-1"
                        to="/login"
                      >
                        Enroll this Course
                        <i className="fas fa-window-restore ml-2"></i>
                      </NavLink>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 bg-secondary">
                <h3>video</h3>
                <i
                  className="fas fa-play-circle "
                  style={{ fontSize: "60px" }}
                ></i>
              </div>
            </div>
          </div>
          <div className="row mx-auto p-1" style={{ maxWidth: "1500px" }}>
            <div className="col-lg-8 col-md-12 col-sm-12 m-0 p-0">
              <Course_description />
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 m-0 p-0">
              <Course_content cid={cid} videosCourse={videosCourse} />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <>
          <h1 className="text-center">loading...</h1>
        </>
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    enroll: (cid) => dispatch(enroll(cid)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const cid = ownProps.match.params.cid;
  const courses = state.firestore.data.course;
  const course = courses ? courses[cid] : null;
  const uid = state.firebase.auth.uid;
  const enroll = state.firestore.ordered.enroll;
  const watched = state.firestore.ordered.watched;
  const videos = state.firestore.ordered.videos;

  let enrolled = false;
  if (enroll) {
    for (const [key, value] of Object.entries(enroll)) {
      if (value.cid === cid) {
        enrolled = true;
      }
    }
  }

  let videoIDno = [];
  let haveWatched = false;

  const videosCourse = [];

  if (cid && videos) {
    for (const [key, value] of Object.entries(videos)) {
      if (value.cid === cid) {
        videoIDno.push(value.id);
        videosCourse.push(value);
      }
    }
  }

  const watchC = [];

  if (watched) {
    for (const [key, value] of Object.entries(watched)) {
      if (value.uid === uid && value.cid === cid) {
        watchC.push(value);
      }
    }
  }

  if (cid && videos && watched) {
    videosCourse.forEach(function (vc, index, theArray) {
      watchC.forEach(function (w) {
        if (w.vid === vc.id) {
          theArray[index] = { video: vc, watched: true };
        }
      });
    });
  }

  const NoWatched = [];
  let NoWatch = [];
  videosCourse.forEach(function (video) {
    if (video.watched === undefined) {
      NoWatched.push(video.id);
      haveWatched = true;
    }
  });

  if (haveWatched) {
    NoWatch = NoWatched;
  } else {
    NoWatch = videoIDno;
  }

  return {
    course: course,
    cid: cid,
    uid: uid,
    enrolled: enrolled,
    videoID: NoWatch[0],
    videosCourse,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "videos",
      orderBy: ["date", "asc"],
    },
    {
      collection: "course",
    },
    {
      collection: "enroll",
      where: ["uid", "==", `${ownProps.uid}`],
    },
    {
      collection: "watched",
    },
  ])
)(CourseDetail);
