import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDToJZayBJRdbyRVXA5z_FzHEA-19Yx6cg",
    authDomain: "finance-tracker-b3f57.firebaseapp.com",
    projectId: "finance-tracker-b3f57",
    storageBucket: "finance-tracker-b3f57.appspot.com",
    messagingSenderId: "220998183849",
    appId: "1:220998183849:web:84f439bb6dc15648d8b2b8",
    measurementId: "G-LSEQ28QC3B"
  };

  firebase.initializeApp(firebaseConfig)

  const projectFirestore = firebase.firestore()
  const projectAuth = firebase.auth()

  //timestamp
  const timestamp = firebase.firestore.Timestamp

  export {projectFirestore, projectAuth, timestamp}