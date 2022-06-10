// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "ehliyetcim-76723.firebaseapp.com",
  projectId: "ehliyetcim-76723",
  storageBucket: "ehliyetcim-76723.appspot.com",
  messagingSenderId: "591163764761",
  appId: "1:591163764761:web:69887370de7369dfddba88",
  measurementId: "G-T9PX74P98T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
