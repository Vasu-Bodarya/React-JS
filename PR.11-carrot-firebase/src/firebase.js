// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDCPDfK5bGCZK526qEWYAEivcv_EUOBtU",
  authDomain: "pr-11-website-firebase.firebaseapp.com",
  databaseURL: "https://pr-11-website-firebase-default-rtdb.firebaseio.com",
  projectId: "pr-11-website-firebase",
  storageBucket: "pr-11-website-firebase.firebasestorage.app",
  messagingSenderId: "957974675902",
  appId: "1:957974675902:web:4fd8685a868c1c8e0af9ef",
  measurementId: "G-67CFRE22MK"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
