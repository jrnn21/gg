import React, { Component } from "react";
import Course_content from "./subcomponent/course_content";
import VideoNav from "./subcomponent/undervideo_navbar";
import { connect } from "react-redux";
import ReactPlayer from "react-player";
import { Redirect } from "react-router-dom";
import { watched } from "../actions/courseActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

const Video = (props) => {
  const { cid, uid, vid, watchC, watched, videosCourse, video, indexV } = props;
  const to = "/mycourses/" + cid + "/video/" + indexV;
  const endded = () => {
    // watched(cid, vid, watchC);
    props.history.push(to);
  };

  if (!uid) {
    return <Redirect to="/login" />;
  } else if ((uid, cid, video !== null)) {
    return (
      <div className="">
        <div className="row m-0 p-0">
          <div className="col-lg-9 col-md-12">
            <div className="video_player">
              <div className="_videos py-2">
                <ReactPlayer
                  width="100%"
                  height="100%"
                  url={video.url}
                  controls
                  playing={true}
                  onEnded={() => endded()}
                />
              </div>
              <VideoNav cid={cid} videosCourse={videosCourse} />
            </div>
          </div>
          <div className="col-lg-3 col-md-12 d-lg-block d-none">
            <Course_content cid={cid} videosCourse={videosCourse} />
          </div>
        </div>
      </div>
    );
  } else {
    return <h1>loading...</h1>;
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    watched: (cid, vid, watchC) => dispatch(watched(cid, vid, watchC)),
  };
};

const mapStateToProps = (state, ownProps) => {
  const cid = ownProps.match.params.cid;
  const uid = state.firebase.auth.uid;
  const vid = ownProps.match.params.vid;
  const watched = state.firestore.ordered.watched;
  const videos = state.firestore.ordered.videos;
  const v = state.firestore.data.videos;
  const video = v ? v[vid] : null;

  console.log(state);

  let videoID = [];
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

  if (cid && videos && watched) {
    for (const [key, value] of Object.entries(videos)) {
      if (value.cid === cid) {
        for (const [Wkey, Wvalue] of Object.entries(watched)) {
          if (Wvalue.uid === uid && Wvalue.cid === cid) {
            if (value.id !== Wvalue.vid) {
              videoID.push(value.id);
              haveWatched = true;
            }
          }
        }
      }
    }
  }

  const watchC = [];

  if (watched) {
    for (const [key, value] of Object.entries(watched)) {
      if (value.uid === uid && value.cid === cid) {
        watchC.push(value.vid);
      }
    }
  }

  let indexV = 0;

  if (videosCourse) {
    videosCourse.forEach(function (vc, index, theArray) {
      if (vc.id === vid) {
        if (videosCourse[index + 1] === undefined) {
          indexV = videosCourse[index].id;
        } else {
          indexV = videosCourse[index + 1].id;
        }
      }
    });
  }
  return {
    cid,
    uid,
    vid,
    videosCourse,
    watchC,
    video,
    indexV,
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "watched",
    },
    {
      collection: "videos",
      orderBy: ["date", "asc"],
    },
  ])
)(Video);
