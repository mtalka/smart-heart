import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDvWGktNNFQ3kfvtIQ1mupAi-9xmtBUckc",
    authDomain: "smart-heart.firebaseapp.com",
    databaseURL: "https://smart-heart.firebaseio.com",
    projectId: "smart-heart",
    storageBucket: "smart-heart.appspot.com",
    messagingSenderId: "874339612032",
    appId: "1:874339612032:web:727f77f3fc746ae67dfd65",
    measurementId: "G-5FYWXR7LLN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
