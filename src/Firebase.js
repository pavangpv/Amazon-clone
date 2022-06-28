// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA00O-bsl3twZbdBJR4K1zDmteFlZ4k61U",
  authDomain: "clone-c538e.firebaseapp.com",
  projectId: "clone-c538e",
  storageBucket: "clone-c538e.appspot.com",
  messagingSenderId: "973333106072",
  appId: "1:973333106072:web:1006941e19f35258546fed",
  measurementId: "G-KB8LQ49DY3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);