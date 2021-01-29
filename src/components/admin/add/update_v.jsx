import React, { useState } from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

const UpdateV = ({ video, UpdateVideo }) => {
  const classes = useStyles();
  const [videoUD, setVideoUD] = useState({
    title: video.title,
    url: video.url,
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoUD((video) => ({ ...video, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateVideo(video, videoUD);
  };

  return (
    <>
      <Button
        color="primary"
        data-toggle="modal"
        data-target={"#exampleModalV" + video.id}
      >
        <i className="fas fa-edit" style={{ fontSize: "130%" }}></i>
      </Button>
      <div
        className="modal fade"
        id={"exampleModalV" + video.id}
        tabIndex="-1"
        aria-labelledby="exampleModalLabelV"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabelV">
                Update video
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
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onChange={handleChange}
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        label="Video Title"
                        autoFocus
                        defaultValue={video && video.title}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={handleChange}
                        variant="outlined"
                        required
                        fullWidth
                        label="Video Url"
                        name="url"
                        defaultValue={video && video.url}
                        required
                      />
                    </Grid>
                  </Grid>

                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                  >
                    Update Video
                  </Button>
                </form>
              </div>
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
};

export default UpdateV;
