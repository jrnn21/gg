import { firestore } from "firebase";

export const signIn = (creeds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(creeds.email, creeds.password)
      .then(() => {
        dispatch({ type: "SIGN_IN" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_IN_ERR" });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT" });
      });
  };
};

export const signUp = (creeds) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    const firestore = getFirebase().firestore();
    // const authorId = getState().firebase.auth.uid;

    firebase
      .auth()
      .createUserWithEmailAndPassword(creeds.email, creeds.password)
      .then((resp) => {
        firestore.collection("users").doc(resp.user.uid).set({
          firstName: creeds.firstName,
          lastName: creeds.lastName,
          createAt: new Date(),
          imgUrl: "",
          uid: resp.user.uid,
          admin: false,
        });
        dispatch({ type: "SIGN_UP" });
      })
      .catch((err) => {
        dispatch({ type: "SIGN_UP_ERR" }, err);
      });
  };
};
