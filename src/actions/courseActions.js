import { firestore } from "firebase";
import { storage } from "../config/firebaseConfig";

export const enroll = (cid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;

    firestore
      .collection("enroll")
      .add({
        date: new Date(),
        cid: cid,
        uid: uid,
        enrolled: true,
        progressBar: 0,
      })
      .then(() => {
        dispatch({ type: "ENROLLED" });
      })
      .catch((err) => {
        dispatch({ type: "ENROLL_ERR" }, err);
      });
  };
};

export const alert_s = (type) => {
  return (dispatch, getState, { getFirebase }) => {
    dispatch({ type: type });
  };
};

export const watched = (cid, vid, watchC) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;
    let t = false;

    if (watchC) {
      for (const [key, value] of Object.entries(watchC)) {
        if (value === vid) {
          t = true;
        }
      }
      if (t === false) {
        firestore
          .collection("watched")
          .add({
            date: new Date(),
            cid: cid,
            uid: uid,
            vid: vid,
            watched: true,
          })
          .then(() => {})
          .catch((err) => {
            dispatch({ type: "WATCHED_ERR" }, err);
          });
      }
    }
  };
};

export const AddCourse = (course, image) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;

    const uploadTask = storage
      .ref(`courseThumnails/${image.image.name}`)
      .put(image.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        dispatch({
          type: "IMAGE_UPLOADING",
        });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        storage
          .ref("courseThumnails")
          .child(image.image.name)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection("course")
              .add({
                ...course,
                createdBy: uid,
                date: new Date(),
                imageUrl: url,
              })
              .then(() => {
                dispatch({
                  type: "ADDED_COURSE",
                  course,
                });
              })
              .catch((err) => {
                dispatch({
                  type: "ADD_COURSE_ERR",
                  err,
                });
              });
          });
      }
    );
  };
};

export const UpdateCourseImg = (course, image) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uploadTask = storage
      .ref(`courseThumnails/${image.image.name}`)
      .put(image.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        dispatch({
          type: "IMAGE_UPLOADING",
        });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        storage
          .ref("courseThumnails")
          .child(image.image.name)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection("course")
              .doc(course.id)
              .set({
                ...course,
                imageUrl: url,
              })
              .then(() => {
                dispatch({
                  type: "UPLOADED_IMAGE",
                  course,
                });
              })
              .catch((err) => {
                dispatch({
                  type: "UPLOADED_IMAGE_ERR",
                  err,
                });
              });
          });
      }
    );
  };
};

export const UpdateCourse = (courses, course) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    // console.log(course.description);
    firestore
      .collection("course")
      .doc(courses.id)
      .set({
        ...courses,
        date: new Date(),
        title: course.title,
        description: course.description,
      })
      .then(() => {
        dispatch({
          type: "UPDATED_COURSE",
          course,
        });
      })
      .catch((err) => {
        dispatch({
          type: "UPDATE_COURSE_ERR",
          err,
        });
      });
  };
};

export const AddVideo = (video, cid) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("videos")
      .add({
        date: new Date(),
        cid: cid,
        url: video.url,
        title: video.title,
      })
      .then(() => {
        dispatch({ type: "ADDED_VIDEO" });
      })
      .catch((err) => {
        dispatch({ type: "ADDED_VIDEO_ERR" }, err);
      });
  };
};

export const UpdateVideo = (video, videoUD) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("videos")
      .doc(video.id)
      .set({
        ...video,
        title: videoUD.title,
        url: videoUD.url,
      })
      .then(() => {
        dispatch({
          type: "UPDATED_VIDEO",
        });
      })
      .catch((err) => {
        dispatch({
          type: "UPDATE_VIDEO_ERR",
          err,
        });
      });
  };
};

export const DeleteVideo = (video) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();

    firestore
      .collection("videos")
      .doc(video.id)
      .delete()
      .then(() => {
        dispatch({
          type: "REMOVED_VIDEO",
        });
      })
      .catch((err) => {
        dispatch({
          type: "REMOVED_VIDEO_ERR",
          err,
        });
      });
  };
};
