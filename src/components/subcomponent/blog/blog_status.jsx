import React, { useSelector, useDispatch } from "react";
import IconButton from "@material-ui/core/IconButton";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import DeleteB from "./delete_blog";

const BlogStatus = ({ blog, userProfile }) => {
  return (
    <>
      <div
        className="bg-light rounded-lg overflow-hidden shadow-lg mb-2 ml-auto pl-2 pt-1"
        style={{ maxWidth: "800px" }}
      >
        <div className="d-flex">
          <div className="mr-2">
            <img
              className="rounded-circle"
              src="https://firebasestorage.googleapis.com/v0/b/appprojects-e4a3d.appspot.com/o/usersImg%2Fimg.jpg?alt=media&token=023c8e4a-5f7c-42c1-babc-b33123f89c16"
              alt=""
              height="48px"
            />
          </div>
          <div className="mt-1">
            <p className="m-0 p-0 font-weight-bold">
              {userProfile.firstName + " " + userProfile.lastName}
            </p>
            <small
              className="m-0 p-0 position-relative"
              style={{ top: "-6px" }}
            >
              {moment(blog.date.toDate()).calendar()}
            </small>
          </div>
        </div>
        <div>
          <h5 className="mt-2 mx-2">{blog.status}</h5>
        </div>
        <div className="border-top text-right">
          <DeleteB blog={blog} DeleteBlog="dd" />
          <IconButton>
            <i className="fas fa-pen" style={{ fontSize: "18px" }}></i>
          </IconButton>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const users = state.firestore.ordered.users;
  const blogCreator = ownProps.blog.uid;
  let userProfile;

  if (users) {
    users.forEach(function (user, index, theArray) {
      if (user.uid === blogCreator) {
        userProfile = user;
      }
    });
  }

  return {
    userProfile,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "users",
    },
  ])
)(BlogStatus);
