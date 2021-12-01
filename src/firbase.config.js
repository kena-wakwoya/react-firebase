// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'
require('dotenv').config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDr8OpFbTq-7s_Cuk_glBWNXYJxdPjQ8UM",
  authDomain: "react-firebase-b798e.firebaseapp.com",
  projectId: "react-firebase-b798e",
  storageBucket: "react-firebase-b798e.appspot.com",
  messagingSenderId: "131472660638",
  appId: "1:131472660638:web:4a958c7beeb2b9c845838f",
  measurementId: "G-GXZNY4BNQ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);