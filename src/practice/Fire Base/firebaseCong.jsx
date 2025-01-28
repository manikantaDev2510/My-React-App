// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwv1tHtQ4zDKA8epCSARWAh2ED7KqGaKY",
  authDomain: "react-app-6cf31.firebaseapp.com",
  projectId: "react-app-6cf31",
  storageBucket: "react-app-6cf31.firebasestorage.app",
  messagingSenderId: "453690919374",
  appId: "1:453690919374:web:baf0c7859a1e519e63c39f",
  measurementId: "G-3Z3PMKQM1N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);    // with this we can intialise our firebase app
const analytics = getAnalytics(app);

export {app} ;