import React from "react";
import "./styles/SideCourseName.css";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";
function SideCourseName({ courseName, courseId }) {
  return (
    <div className="sideCourseName">
      <Link to={`/quiz/${courseId}`}> 
      <div className="sideCourseName__option">
        <AssignmentIcon />
        <h4>{courseName}</h4>
      </div>
      </Link>
    </div>
  );
}

export default SideCourseName;
