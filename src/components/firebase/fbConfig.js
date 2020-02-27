import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "smart-heart.firebaseapp.com",
    databaseURL: "https://smart-heart.firebaseio.com",
    projectId: "smart-heart",
    storageBucket: "smart-heart.appspot.com",
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: "G-5FYWXR7LLN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
