import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAiCGS43cp_aG6NM-2mmFZY0yGmasqPlHs",
    authDomain: "nist-university-login.firebaseapp.com",
    projectId: "nist-university-login",
    storageBucket:  "nist-university-login.appspot.com",
    messagingSenderId: "520469115029",
    appId: "1:520469115029:web:504c869551ae43bfcc6b9c"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };