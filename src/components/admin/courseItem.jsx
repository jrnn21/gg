import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Paper from "@material-ui/core/Paper";
import { UpdateCourseImg } from "../../actions/courseActions";
import { UpdateCourse } from "../../actions/courseActions";
import UploadImg from "./add/uploadImg";
import Update_course from "./add/update_course";
import Add_Video from "./add/add_video";
import { AddVideo } from "../../actions/courseActions";
import VideoList from "./add/VideoList";
import { UpdateVideo } from "../../actions/courseActions";
import { DeleteVideo } from "../../actions/courseActions";
import Objective from "./add/objective";

const CourseItems = (props) => {
  const {
    course,
    UpdateCourseImg,
    user,
    UpdateCourse,
    cid,
    AddVideo,
    videoLists,
    UpdateVideo,
    DeleteVideo,
  } = props;
  const imgDef =
    "https://firebasestorage.googleapis.com/v0/b/learnapp-f3ba7.appspot.com/o/courseThumnails%2F2.jpg?alt=media&token=aba39be3-34a2-4c5e-b8d1-473804aa69f3";

  if (course) {
    return (
      <div className="w-100">
        {course &&
          course.map((course) => (
            <Paper elevation={3} className="p-1" key={course.id}>
              <div className="courseCover" style={{ width: "100%" }}>
                <div className="row">
                  <div
                    className="col-sm-12 col-lg-4 "
                    style={{ position: "relative" }}
                  >
                    <img
                      src={course.imageUrl ? course.imageUrl : imgDef}
                      alt=""
                      className=""
                      width="100%"
                      height=""
                    />

                    <UploadImg
                      course={course}
                      UpdateCourseImg={UpdateCourseImg}
                    />
                  </div>
                  <div className="col-sm-12 col-lg-8">
                    <Update_course
                      courses={course}
                      user={user}
                      UpdateCourse={UpdateCourse}
                    />
                  </div>
                </div>
              </div>
            </Paper>
          ))}
        <div className="row mt-3">
          <div className="col-md-8">
            <Paper elevation={4} className="p-1">
              <Add_Video cid={cid} AddVideo={AddVideo} />
              <VideoList
                videoLists={videoLists}
                UpdateVideo={UpdateVideo}
                DeleteVideo={DeleteVideo}
              />
            </Paper>
          </div>
          <div className="col-md-4">
            <Paper elevation={4} className="p-1">
              <Objective />
            </Paper>
          </div>
        </div>
      </div>
    );
  } else {
    return <h1 className="text-center">Loading...</h1>;
  }
};

const mapStateToProps = (state, ownProps) => {
  const cid = ownProps.match.params.cid;
  const users = state.firestore.data.users;
  const c = state.firestore.ordered.course;
  const videoLists = state.firestore.ordered.videos;

  const course = [];
  let createById = "";
  if (c) {
    for (const [key, value] of Object.entries(c)) {
      if (value.id === cid) {
        course.push(value);
        createById = value.createdBy;
      }
    }
  }
  const user = users && users ? users[createById] : null;

  return {
    cid,
    course,
    user,
    videoLists,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    UpdateCourseImg: (course, img) => dispatch(UpdateCourseImg(course, img)),
    UpdateCourse: (courses, course) => dispatch(UpdateCourse(courses, course)),
    AddVideo: (video, cid) => dispatch(AddVideo(video, cid)),
    UpdateVideo: (video, videoUD) => dispatch(UpdateVideo(video, videoUD)),
    DeleteVideo: (video) => dispatch(DeleteVideo(video)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "course",
    },
    {
      collection: "videos",
      where: ["cid", "==", ownProps.cid],
      orderBy: ["date", "asc"],
    },
    {
      collection: "users",
    },
  ])
)(CourseItems);
