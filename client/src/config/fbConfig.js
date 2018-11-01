import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyDjOQYXSt2gr7_muTn2ZrsCmZK_zgZcMVU",
  authDomain: "project-planz.firebaseapp.com",
  databaseURL: "https://project-planz.firebaseio.com",
  projectId: "project-planz",
  storageBucket: "project-planz.appspot.com",
  messagingSenderId: "805584532945"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
