import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB7ktkh75L6aQ_L7Oz6kImYuiq_7VtVSmg",
    authDomain: "afitcompass.firebaseapp.com",
    projectId: "afitcompass",
    storageBucket: "afitcompass.appspot.com",
    messagingSenderId: "373854230424",
    appId: "1:373854230424:web:2a63424308223f2b043ded",
    measurementId: "G-SEY7KVKFLC"
  };


  if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
    }

  export { firebase };

  



