// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDL8Dgyr-MfMohU7qiiOXmsXcahl0NKtp4",
  authDomain: "react-firebase-chat-app-555fb.firebaseapp.com",
  projectId: "react-firebase-chat-app-555fb",
  storageBucket: "react-firebase-chat-app-555fb.appspot.com",
  messagingSenderId: "40339457354",
  appId: "1:40339457354:web:736ef7357a064abdbeedb3",
  measurementId: "G-JX5PTX44DJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;