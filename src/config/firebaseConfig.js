import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBuKLXJhhkyqt1RipAoeatDmMCxhGfTGaI",
  authDomain: "appprojects-e4a3d.firebaseapp.com",
  databaseURL: "https://appprojects-e4a3d.firebaseio.com",
  projectId: "appprojects-e4a3d",
  storageBucket: "appprojects-e4a3d.appspot.com",
  messagingSenderId: "472046117919",
  appId: "1:472046117919:web:09ee0d22b666369e27612a",
  measurementId: "G-5D5MFY9BD6",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const storage = firebase.storage();
export { storage, firebase as default };
