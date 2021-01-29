import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";
import authReducer from "./authReducer";
import courseReducers from "./courseReducers";
import blogReducers from "./blogReducers";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
  auth: authReducer,
  course: courseReducers,
  blog: blogReducers,
});

export default rootReducer;
