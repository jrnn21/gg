import React from "react";
import "./styles/Sidebar.css";
import SideCourseName from "./SideCourseName";

function Sidebar({ courses }) {
  return (
    <div className="sidebar">
      <h3>Choose Courses to Practices</h3>
      {!courses
        ? "<h3>Loading</h3>"
        : courses.map((course) => <SideCourseName courseName={course.title} courseId={course.id} />)}
    </div>
  );
}

export default Sidebar;
