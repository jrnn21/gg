import React, { useState } from "react";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
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

const DeleteB = ({ blog, DeleteBlog }) => {
  const classes = useStyles();

  return (
    <>
      <IconButton data-toggle="modal" data-target={"#exampleModal" + blog.id}>
        <i className="fas fa-trash" style={{ fontSize: "18px" }}></i>
      </IconButton>
      <div
        className="modal fade"
        id={"exampleModal" + blog.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {blog.type === "blog"
                  ? "Delete this Blog"
                  : "Delete this Status"}
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
              <div className={classes.paper} className="text-center">
                {blog.type === "blog" ? (
                  <>
                    <h6>Do you want to delete this Blog?</h6>
                    <h4>{blog.title}</h4>
                    <p>ID : {blog.id}</p>
                    <p>Descriptions : {blog.descriptions}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      //   onClick={() => DeleteVideo(video)}
                      data-dismiss="modal"
                    >
                      Delete this blog
                    </Button>
                  </>
                ) : (
                  <>
                    <h6>Do you want to delete this Status?</h6>
                    <h4>{blog.title}</h4>
                    <p>ID : {blog.id}</p>
                    <p>Status : {blog.status}</p>
                    <Button
                      variant="contained"
                      color="secondary"
                      //   onClick={() => DeleteVideo(video)}
                      data-dismiss="modal"
                    >
                      Delete this blog
                    </Button>
                  </>
                )}
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

export default DeleteB;
