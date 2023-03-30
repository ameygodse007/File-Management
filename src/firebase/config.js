import  firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import  'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAxH4JtGBRlhrSZbl2cV1s9H7PocOKv01Y",
    authDomain: "project-management-fdd5d.firebaseapp.com",
    projectId: "project-management-fdd5d",
    storageBucket: "project-management-fdd5d.appspot.com",
    messagingSenderId: "111189519040",
    appId: "1:111189519040:web:82ad4b08bb6ef5c464db25"
  };

  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }