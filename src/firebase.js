// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBVOYtew8vXH6TTTYzCn7BD0KpYSuc2JGQ",
  authDomain: "authentication-9d178.firebaseapp.com",
  projectId: "authentication-9d178",
  storageBucket: "authentication-9d178.appspot.com",
  messagingSenderId: "571048088266",
  appId: "1:571048088266:web:5ea9fe43882a15a66fda33",
  measurementId: "G-F3HGQ1XESV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth=getAuth();
export {app,auth};
