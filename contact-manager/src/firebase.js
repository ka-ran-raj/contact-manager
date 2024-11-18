// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyBc-m_6AoBh0xXPHfH9QnYCxW0la-wU_CY",
    authDomain: "contact-manager-bf13c.firebaseapp.com",
    projectId: "contact-manager-bf13c",
    storageBucket: "contact-manager-bf13c.appspot.com",
    messagingSenderId: "875847487246",
    appId: "1:875847487246:web:090be3928750c19c9b115f",
    measurementId: "G-X7MPC2MXFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// Optional: Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider, signInWithPopup };
