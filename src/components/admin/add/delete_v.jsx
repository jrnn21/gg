import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    fontFamily: "Ubuntu",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const DeleteV = ({ video, DeleteVideo }) => {
  const classes = useStyles();

  return (
    <>
      <Button
        color="secondary"
        data-toggle="modal"
        data-target={"#exampleModal" + video.id}
      >
        <i className="fas fa-trash" style={{ fontSize: "130%" }}></i>
      </Button>
      <div
        className="modal fade"
        id={"exampleModal" + video.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete this video
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
              <div className={classes.paper}>
                <h6>Do you want to delete this video?</h6>
                <h4>{video.title}</h4>
                <p>ID : {video.id}</p>
                <p>Url : {video.url}</p>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => DeleteVideo(video)}
                  data-dismiss="modal"
                >
                  Delete this video
                </Button>
              </div>
            </div>
            <div className="modal-footer">
              <Button data-dismiss="modal" variant="contained">
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteV;
