import React from "react";
import RecipeReviewCard from "./subcomponent/course_card";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

const Courses = ({ courses, allCourses }) => {
  if (courses)
    return (
      <div className="">
        <div
          className="m-0 p-0 row align-items-center d-none d-lg-block"
          style={{ maxHeight: "18rem", overflow: "hidden" }}
        >
          {allCourses ? (
            <img width="100%" src={require("../img/cover/1.jpg")} alt="" />
          ) : (
            <img width="100%" src={require("../img/cover/5.jpg")} alt="" />
          )}
        </div>
        <div className="mx-auto" style={{ maxWidth: "1500px" }}>
          <Helmet>
            <title>Coding Cam | Courses</title>
          </Helmet>
          {allCourses ? (
            <h4 className="mx-3 mt-4"> All Courses</h4>
          ) : (
            <h4 className="mx-3 mt-4"> My Courses</h4>
          )}
          <div className="row m-1">
            {courses &&
              courses.map((courses) => (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3 p-3"
                  key={courses.id}
                >
                  <NavLink
                    to={"/courses/" + courses.id}
                    className="nav-link m-0 p-0"
                  >
                    <RecipeReviewCard
                      courses={courses}
                      allCourses={allCourses}
                    />
                  </NavLink>
                </div>
              ))}
          </div>
        </div>
      </div>
    );
};

export default Courses;
