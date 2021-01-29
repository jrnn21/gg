import React from "react";
import Navbar from "./components/layout/navbar";
import Dashboard from "./components/Dashboard/Dashboard";
import AllCourses from "./components/allCourses";
import SignIn from "./components/auth/signin";
import SignUp from "./components/auth/signup";
import CourseDetail from "./components/courseDetail";
import MyCourses from "./components/mycourses";
import Video from "./components/video_page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Admin from "./components/admin/admin";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Footer from "./components/layout/footer";
import Blog from "./components/Dashboard/Blog";
import Quiz from './components/quiz/Quiz';

function App(props) {
  const { admin } = props;
  return (
    <>
      <Router>
        <div id="alert" className="shadow-lg"></div>
        <ToastContainer />
        <div className="container-fluid m-0 p-0">
          <Navbar />
          <Switch>
            {admin && admin ? (
              <>
                <Route path="/quiz" exact strict component={Quiz} />
                <Route path="/course" exact strict component={Admin} />
                <Route path="/course/:cid" exact strict component={Admin} />
                <Route path="/users" exact strict component={Admin} />
                <Route path="/" exact strict component={Dashboard} />
                <Route path="/courses" exact strict component={AllCourses} />
                <Route path="/mycourses" exact strict component={MyCourses} />
                <Route path="/login" exact strict component={SignIn} />
                <Route path="/signup" exact strict component={SignUp} />
                <Route path="/blog" exact strict component={Blog} />
                <Route path="/blog/:bid" exact strict component={Blog} />
                <Route
                  path="/courses/:cid"
                  exact
                  strict
                  component={CourseDetail}
                />
                <Route
                  path="/mycourses/:cid/video/:vid"
                  exact
                  strict
                  component={Video}
                />
              </>
            ) : (
              <>
               <Route path="/quiz" exact strict component={Quiz} />
               <Route path="/quiz/:quizId" exact strict component={Quiz} />
                <Route path="/" exact strict component={Dashboard} />
                <Route path="/courses" exact strict component={AllCourses} />
                <Route path="/mycourses" exact strict component={MyCourses} />
                <Route path="/login" exact strict component={SignIn} />
                <Route path="/signup" exact strict component={SignUp} />
                <Route path="/blog" exact strict component={Blog} />
                <Route path="/blog/:bid" exact strict component={Blog} />
                <Route
                  path="/courses/:cid"
                  exact
                  strict
                  component={CourseDetail}
                />
                <Route
                  path="/mycourses/:cid/video/:vid"
                  exact
                  strict
                  component={Video}
                />
              </>
            )}
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

const mapStateToProps = (state) => {
  const user = state.firestore.data.users;
  const currentUserID = state.firebase.auth.uid;
  const currentUser = user ? user[currentUserID] : null;
  let admin = false;

  if (currentUser && currentUser.admin === true) {
    admin = true;
  }

  return {
    admin,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "users",
    },
  ])
)(App);
