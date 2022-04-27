// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClMpdNfpiYV99bgsRll8uTwYXKYE10aLo",
  authDomain: "conceptual-section.firebaseapp.com",
  projectId: "conceptual-section",
  storageBucket: "conceptual-section.appspot.com",
  messagingSenderId: "636387142556",
  appId: "1:636387142556:web:d54bcead9a193beda5b659",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
