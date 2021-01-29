import React, { Component } from "react";
import { Button } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CourseModal from "./courseModal";
class AddCourse extends Component {
  state = {};
  render() {
    return (
      <>
        <Button
          className="mr-3 btn_G"
          data-toggle="modal"
          data-target="#exampleModal"
          variant="contained"
          startIcon={<CloudUploadIcon />}
        >
          add course
        </Button>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Course
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <CourseModal />
              </div>
              <div className="modal-footer">
                <Button data-dismiss="modal" variant="contained">
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddCourse;
