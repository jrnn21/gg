import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress
          variant="determinate"
          {...props}
          style={{
            height: "8px",
            borderRadius: "3px",
          }}
          color={"secondary"}
        />
      </Box>
      <Box minWidth={35}>
        <Typography variant="body2" color="textSecondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});
const LinearWithValueLabel = ({ progress }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const videos = state.firestore.ordered.videos;
  const cid = ownProps.cid;
  const watched = state.firestore.ordered.watched;
  const uid = state.firebase.auth.uid;
  const videoC = [];
  const watchC = [];

  if (videos) {
    videos.forEach(function (vc, index, theArray) {
      if (vc.cid === cid) {
        videoC.push(vc);
      }
    });
  }

  if (watched) {
    for (const [key, value] of Object.entries(watched)) {
      if (value.uid === uid && value.cid === cid) {
        for (const [ckey, cvalue] of Object.entries(videoC)) {
          if (value.vid === cvalue.id) {
            watchC.push(value.vid);
          }
        }
      }
    }
  }

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  // Get the size of an object
  var sizeC = Object.size(videoC);
  var sizeW = Object.size(watchC);

  const progressC = (sizeW / sizeC) * 100;

  return {
    progress: progressC,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect((ownProps) => [
    {
      collection: "videos",
      orderBy: ["date", "asc"],
    },
    {
      collection: "watched",
    },
  ])
)(LinearWithValueLabel);
