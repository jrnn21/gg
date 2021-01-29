import React, { useState } from "react";
import { Button } from "@material-ui/core";
const UploadImg = ({ course, UpdateCourseImg }) => {
  const [image, setImage] = useState({
    image: null,
  });
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const img = e.target.files[0];
      setImage({ image: img });
    }
  };
  const SubmitUpdate = (e) => {
    e.preventDefault();
    UpdateCourseImg(course, image);
  };
  return (
    <>
      <Button
        className=""
        data-toggle="modal"
        data-target="#exampleModal"
        variant="contained"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "25px",
        }}
      >
        <i className="fas fa-upload p-md-0 p-lg-1"></i>
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
                Upload Image
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
            <div className="modal-body text-center">
              <form onSubmit={SubmitUpdate}>
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  required
                />
                <Button variant="contained" type="submit">
                  Upload Image
                </Button>
              </form>
            </div>
            <div className="modal-footer">
              <Button
                data-dismiss="modal"
                variant="contained"
                color="secondary"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadImg;
