import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import { addBlog } from "../../../actions/blogActions";

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

const AddBlog = (props) => {
  const classes = useStyles();
  const [blog, setBlog] = useState({});
  const [image, setImage] = useState({
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((blog) => ({ ...blog, [name]: value }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage({ image: image });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addBlog(blog, image);
  };

  return (
    <>
      <Button
        className="w-100 py-3 m-0"
        color="secondary"
        data-toggle="modal"
        data-target={"#exampleModal_blog"}
      >
        <i className="fas fa-plus-circle" style={{ fontSize: "20px" }}></i>
        Add Blog
      </Button>
      <div
        className="modal fade"
        id={"exampleModal_blog"}
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg text-dark">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Blog
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
                <h6>Please input your value!</h6>
                <form className={classes.form} onSubmit={handleSubmit}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onChange={handleChange}
                        name="title"
                        variant="outlined"
                        required
                        fullWidth
                        id="BlogName"
                        label="Blog Title"
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
                        id="BlogDes"
                        label="Blog Descriptions"
                        name="descriptions"
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
                        Upload Blog Image
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
                    color="secondary"
                    className={classes.submit}
                    // data-dismiss="modal"
                  >
                    Add Blog
                  </Button>
                </form>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addBlog: (blog, image) => dispatch(addBlog(blog, image)),
  };
};

export default connect(null, mapDispatchToProps)(AddBlog);
