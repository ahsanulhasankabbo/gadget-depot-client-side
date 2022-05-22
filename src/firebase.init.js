// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWcLSLRFxSItY711zlrMz479PAK7k-81w",
  authDomain: "gadget-depot.firebaseapp.com",
  projectId: "gadget-depot",
  storageBucket: "gadget-depot.appspot.com",
  messagingSenderId: "641488173772",
  appId: "1:641488173772:web:cb14f4b72d52af52862069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;