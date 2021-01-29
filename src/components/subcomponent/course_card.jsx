import React from "react";
import "./course_card.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { firestoreConnect } from "react-redux-firebase";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import moment from "moment";
import { compose } from "redux";
import { connect } from "react-redux";
import ProgressBar from "./progressCourse";

const useStyles = makeStyles((theme) => ({
  pp: { fontFamily: "Ubuntu" },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
    fontFamily: "Ubuntu",
  },
}));

const RecipeReviewCard = ({ courses, user, allCourses }) => {
  const classes = useStyles();
  return (
    <>
      <Card
        className="shadow-md course_card"
        style={{ marginBottom: 15, cursor: "pointer" }}
      >
        <CardMedia className={classes.media} image={courses.imageUrl} />
        <CardContent>
          <h5 className="text-dark text-center">{courses.title}</h5>
          {allCourses && allCourses === true ? null : (
            <ProgressBar cid={courses.id} />
          )}
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.pp}
            // className="text-center"
          >
            {allCourses && allCourses === true ? (
              <>{courses.description.slice(0, 130) + "..."}</>
            ) : (
              <>{courses.description.slice(0, 90) + "..."}</>
            )}
          </Typography>
        </CardContent>
        <div className={classes.pp}>
          <CardHeader
            className={classes.pp}
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <img
                  src={require("../../img/carousel/person1.jpg")}
                  alt=""
                  width={100}
                />
              </Avatar>
            }
            title={user && user.firstName + " " + user.lastName}
            subheader={moment(courses.date.toDate()).calendar()}
          />
        </div>
      </Card>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  const users = state.firestore.data.users;
  const uid = ownProps.courses.createdBy;
  const user = users && users ? users[uid] : null;
  return {
    user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "users",
    },
  ])
)(RecipeReviewCard);
