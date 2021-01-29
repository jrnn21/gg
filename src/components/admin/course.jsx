import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
class Course extends Component {
  state = {};
  render() {
    const { course, user } = this.props;
    const ImgDef =
      "https://firebasestorage.googleapis.com/v0/b/learnapp-f3ba7.appspot.com/o/courseThumnails%2F2.jpg?alt=media&token=aba39be3-34a2-4c5e-b8d1-473804aa69f3";

    return (
      <>
        <Paper elevation={3} className="p-1 mb-1">
          <div className="row">
            <div className="col-4">
              <img
                src={course && course.imageUrl ? course.imageUrl : ImgDef}
                alt=""
                className=""
                width="140px"
                height=""
                style={{}}
              />
            </div>
            <div className="col-8">
              <h5 className="p-0 mt-2 text-center">{course && course.title}</h5>
              <p className="p-0 m-0">
                by : {user && user.firstName + " " + user.lastName}
              </p>
              <small className="p-0 m-0">
                {course && moment(course.date.toDate()).calendar()}
              </small>
            </div>
          </div>
        </Paper>
      </>
    );
  }
}

export default Course;
