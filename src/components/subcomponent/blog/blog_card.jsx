import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteB from "./delete_blog";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

const BlogCard = ({ blog, userProfile }) => {
  console.log(userProfile);
  return (
    <>
      <div
        className="bg-light rounded-lg overflow-hidden shadow-lg mb-2 ml-auto"
        style={{ maxWidth: "800px" }}
        key={blog.id}
      >
        <div className="row">
          <div className="col-md-5">
            <div className="d-flex  mx-2 my-1">
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
            <img className="w-100" src={blog.imgUrl} alt="" />
          </div>
          <div className="col-md-7 text-justify">
            <h4 className="text-center mt-2">{blog.title}</h4>
            <p className="pr-md-3 px-sm-2 px-2">
              <span className="mr-4"></span>
              {blog.descriptions}
            </p>
          </div>
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
)(BlogCard);
