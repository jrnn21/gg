import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { alert_s } from "../../actions/courseActions";

const Course_content = (props) => {
  const { course, cid, videos, enrollC, alert_s } = props;
  let i = 1;
  if (cid && videos && course) {
    return (
      <div className="mt-3">
        <h4>Course Context</h4>
        <p className="mt-4">12 Sections . 2 lectures</p>
        <h6 className="bg-dark text-light px-4 py-2 mb-1">
          {course && course.title}
        </h6>

        {videos &&
          videos.map((videos) => (
            <div key={i++}>
              {enrollC && enrollC ? (
                <>
                  {videos.watched === undefined ? (
                    <NavLink
                      to={"/mycourses/" + cid + "/video/" + videos.id}
                      className="_text-sea-hover row mx-0 pt-2 pb-2"
                      activeClassName="text-light bg-info"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="col-sm-8 col-12">
                        <input type="checkbox" className="mr-4" />
                        <i className="fas fa-play-circle mr-2"></i>
                        {videos.title}
                      </span>
                      <span className="col-sm-4 text-right d-none d-md-block">
                        3:40m
                      </span>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={"/mycourses/" + cid + "/video/" + videos.video.id}
                      className="_text-sea-hover row mx-0 pt-2 pb-2 _text-gray"
                      activeClassName="text-light bg-info"
                      style={{ fontSize: "14px" }}
                    >
                      <span className="col-sm-8 col-12">
                        <input
                          type="checkbox"
                          className="mr-4"
                          defaultChecked
                        />
                        <i className="fas fa-play-circle mr-2"></i>
                        {videos.video.title}
                      </span>
                      <span className="col-sm-4 text-right d-none d-md-block">
                        3:40m
                      </span>
                    </NavLink>
                  )}
                </>
              ) : (
                <>
                  {videos.watched === undefined ? (
                    <NavLink
                      to={"/courses/" + cid}
                      className="_text-sea-hover row mx-0 pt-2 pb-2"
                      style={{ fontSize: "14px" }}
                      onClick={() => alert_s("ENROLL_NOT_ALLOW")}
                    >
                      <span className="col-sm-8 col-12">
                        <input type="checkbox" className="mr-4" />
                        <i className="fas fa-play-circle mr-2"></i>
                        {videos.title}
                      </span>
                      <span className="col-sm-4 text-right d-none d-md-block">
                        3:40m
                      </span>
                    </NavLink>
                  ) : (
                    <NavLink
                      to={"/courses/" + cid}
                      className="_text-sea-hover row mx-0 pt-2 pb-2 _text-gray"
                      style={{ fontSize: "14px" }}
                      onClick={() => alert_s("ENROLL_NOT_ALLOW")}
                    >
                      <span className="col-sm-8 col-12">
                        <input
                          type="checkbox"
                          className="mr-4"
                          defaultChecked
                        />
                        <i className="fas fa-play-circle mr-2"></i>
                        {videos.video.title}
                      </span>
                      <span className="col-sm-4 text-right d-none d-md-block">
                        3:40m
                      </span>
                    </NavLink>
                  )}
                </>
              )}
            </div>
          ))}
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const cid = ownProps.cid;
  const courses = state.firestore.data.course;
  const course = courses ? courses[cid] : null;
  const watched = state.firestore.ordered.watched;
  const uid = state.firebase.auth.uid;
  const videosCourse = ownProps.videosCourse;
  const enroll = state.firestore.ordered.enroll;

  const watchC = [];

  if (watched) {
    for (const [key, value] of Object.entries(watched)) {
      if (value.uid === uid && value.cid === cid) {
        watchC.push(value);
      }
    }
  }

  if (cid && videosCourse && watched) {
    videosCourse.forEach(function (vc, index, theArray) {
      watchC.forEach(function (w) {
        if (w.vid === vc.id) {
          theArray[index] = { video: vc, watched: true };
        }
      });
    });
  }

  let enrollC = false;
  if (enroll) {
    enroll.forEach((enroll) => {
      if (enroll.cid === cid) {
        enrollC = true;
      }
    });
  }

  return {
    course,
    cid,
    uid,
    videos: videosCourse,
    enrollC,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alert_s: (a) => dispatch(alert_s(a)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "course",
    },
    {
      collection: "watched",
    },
    {
      collection: "enroll",
      where: ["uid", "==", `${ownProps.uid}`],
    },
  ])
)(Course_content);
