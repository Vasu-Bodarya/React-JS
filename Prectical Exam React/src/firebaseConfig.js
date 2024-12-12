import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATYPQz-f2YkRlwuY3U55jpZiWxCOTwPG4",
  authDomain: "todo-firebase-e4b44.firebaseapp.com",
  databaseURL: "https://todo-firebase-e4b44-default-rtdb.firebaseio.com",
  projectId: "todo-firebase-e4b44",
  storageBucket: "todo-firebase-e4b44.firebasestorage.app",
  messagingSenderId: "502458258009",
  appId: "1:502458258009:web:0eb1b796d7b74f436ed748",
  measurementId: "G-1QG8W2ME7E"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth , db };