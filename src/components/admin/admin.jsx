import React from "react";
import Nav from "./nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Courses from "./courses";
import AllCourses from "../allCourses";
import CourseItems from "./courseItem";

const Admin = () => {
  return (
    <>
      <Router>
        <div className="row mt-4 w-100">
          <div className="col-md-3 col-lg-2">
            <Nav />
          </div>
          <div className="col-md-9  col-lg-10">
            <Switch>
              <Route path="/course/:cid" exact strict component={CourseItems} />
              <Route path="/course" exact strict component={Courses} />
              <Route path="/users" exact strict component={AllCourses} />
            </Switch>
          </div>
        </div>
      </Router>
    </>
  );
};

export default Admin;
