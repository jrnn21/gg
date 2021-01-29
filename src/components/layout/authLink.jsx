import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { signOut } from "../../actions/authActions";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Button } from "@material-ui/core";

class AuthLink extends Component {
  state = {
    drop: false,
  };
  dropPF = () => {
    this.state.drop = !this.state.drop;
    if (this.state.drop) {
      document.querySelector(".dropPF").classList.remove("on");
    } else {
      document.querySelector(".dropPF").classList.add("on");
    }
  };

  render() {
    const { uid, signOut, user, admin } = this.props;
    if (uid && user) {
      return (
        <>
          {admin && admin ? (
            <NavLink
              to="/course"
              style={{ textDecoration: "none" }}
              activeClassName="d-none"
            >
              <Button
                variant="contained"
                color="secondary"
                className="mr-4 btn_G"
              >
                <span className="_text-sea-hover">
                  <i
                    className="fas fa-tools text-light text-center mr-1"
                    title="Admin"
                  ></i>
                  <span className="text-light">Admin</span>
                </span>
              </Button>
            </NavLink>
          ) : null}
          <div
            className="mx-2"
            style={{ position: "relative", top: "3.5px" }}
            onClick={this.dropPF}
          >
            {user.imgUrl ? (
              <img
                src={user.imgUrl}
                alt=""
                width="27"
                height="27"
                className="rounded-circle  d-none d-md-block"
                style={{ transform: "scale(1.5,1.5)", cursor: "pointer" }}
              />
            ) : (
              <img
                src="https://firebasestorage.googleapis.com/v0/b/learnapp-f3ba7.appspot.com/o/userIMG%2Fimg.jpg?alt=media&token=33d80ee1-78c7-4fd0-a1d9-39cc75652394"
                alt=""
                width="27"
                height="27"
                className="rounded-circle  d-none d-md-block"
                style={{ transform: "scale(1.5,1.5)", cursor: "pointer" }}
              />
            )}

            <span className="d-md-none">Profile</span>
            <div className="dropPF on p-2 rounded shadow-lg">
              <div className="row justify-content-center">
                {user.imgUrl ? (
                  <img
                    src={user.imgUrl}
                    alt=""
                    className="rounded-circle m-3"
                    width="80"
                    height="80"
                    style={{}}
                  />
                ) : (
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/learnapp-f3ba7.appspot.com/o/userIMG%2Fimg.jpg?alt=media&token=33d80ee1-78c7-4fd0-a1d9-39cc75652394"
                    alt=""
                    className="rounded-circle m-3"
                    width="80"
                    height="80"
                    style={{}}
                  />
                )}
              </div>
              <h5 className="text-center m-0 p-0">
                {user.firstName} {user.lastName}
              </h5>
              <p className="text-center m-0 p-0">{user.email}</p>

              <button className="btn _bg-sea mx-auto">Edit</button>
              <NavLink
                to="/login"
                className="nav-link text-center bg-dark my-2 rounded"
                onClick={signOut}
              >
                <i
                  className="fas fa-power-off _text-sea-hover text-danger text-center mr-1"
                  title="Sign out"
                ></i>
                <span className="text-light">Logout</span>
              </NavLink>
            </div>
          </div>
        </>
      );
    } else {
      return (
        <>
          <NavLink
            to="/login"
            className="nav-item nav-link"
            activeClassName="_nav-active"
          >
            {/* <i
              className="fas fa-sign-in-alt _text-sea-hover"
              title="Log In"
              style={{}}
            ></i> */}
            login
          </NavLink>
          <NavLink
            to="/signup"
            className="nav-item nav-link"
            activeClassName="_nav-active"
          >
            {/* <i
              className="fas fa-user-plus _text-sea-hover"
              title="Register"
              style={{}}
            ></i> */}
            register
          </NavLink>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  const uid = state.firebase.auth.uid;
  const users = state.firestore.data.users;
  const user = users ? users[uid] : null;
  let admin = false;

  if (user && user.admin === true) {
    admin = true;
  }

  return {
    uid: uid,
    user: user,
    admin,
  };
};

const mapsDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default compose(
  connect(mapStateToProps, mapsDispatchToProps),
  firestoreConnect(() => [
    {
      collection: "users",
    },
  ])
)(AuthLink);
