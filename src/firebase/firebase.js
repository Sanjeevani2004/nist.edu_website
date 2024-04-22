import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDXddyPkrFf0tOas9ZbPEyJyp3Q-rtRD30",
  authDomain: "nist-atndn.firebaseapp.com",
  databaseURL: "https://nist-atndn-default-rtdb.firebaseio.com",
  projectId: "nist-atndn",
  storageBucket: "nist-atndn.appspot.com",
  messagingSenderId: "684263793837",
  appId: "1:684263793837:web:98b7b2775742c7046b26c",
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Initialize Authentication
const auth = firebase.auth();

// Initialize Firestore Database
const db = firebase.firestore();

export { app, auth, db };