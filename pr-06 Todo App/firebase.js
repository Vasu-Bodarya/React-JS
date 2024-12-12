// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config from the Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBTJ-MeB-_DgOl0bDURZHEnJXvms60O9BA",
    authDomain: "aunthication-login.firebaseapp.com",
    projectId: "aunthication-login",
    storageBucket: "aunthication-login.firebasestorage.app",
    messagingSenderId: "450582545751",
    appId: "1:450582545751:web:b9f96ed3c0796030d3aa12",
    measurementId: "G-PZCQRBDV04"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth , db };
