import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { AddCourse } from "../../../actions/courseActions";

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
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const CourseModal = (props) => {
  const classes = useStyles();
  const [course, setCourse] = useState({});
  const [image, setImage] = useState({
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((course) => ({ ...course, [name]: value }));
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage({ image: image });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addCourse(course, image);
  };

  return (
    <>
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
                id="courseName"
                label="Course Title"
                autoFocus
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                id="courseDes"
                label="Course Description"
                name="description"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                component="label"
                fullWidth
              >
                Upload Course Image
                <input
                  type="file"
                  name="image"
                  id="image"
                  onChange={handleImageChange}
                  style={{ display: "none" }}
                  required
                />
              </Button>
            </Grid>
          </Grid>

          <Button
            type="submit"
            // fullWidth
            variant="contained"
            // color="secondary"
            className={classes.submit}
          >
            Add Course
          </Button>
        </form>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addCourse: (creds, image) => dispatch(AddCourse(creds, image)),
  };
};

export default connect(null, mapDispatchToProps)(CourseModal);
