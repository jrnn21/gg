import { firestore } from "firebase";
import { storage } from "../config/firebaseConfig";

export const addBlog = (blog, image) => {
  return (dispatch, getState, { getFirebase }) => {
    const firestore = getFirebase().firestore();
    const uid = getState().firebase.auth.uid;

    console.log(blog, image);
    const uploadTask = storage
      .ref(`blogImage/${image.image.name}`)
      .put(image.image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // progrss function ....
        dispatch({
          type: "BLOG_IMAGE_UPLOADING",
        });
      },
      (error) => {
        // error function ....
        console.log(error);
      },
      () => {
        storage
          .ref("blogImage")
          .child(image.image.name)
          .getDownloadURL()
          .then((url) => {
            firestore
              .collection("blog")
              .add({
                ...blog,
                uid: uid,
                date: new Date(),
                imgUrl: url,
                content: [],
                type: "blog",
              })
              .then(() => {
                dispatch({
                  type: "ADDED_BLOG",
                  blog,
                });
              })
              .catch((err) => {
                dispatch({
                  type: "ADD_BLOG_ERR",
                  err,
                });
              });
          });
      }
    );
  };
};
