// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0uGtofYyLw90F89d-OW5QxtrYVG9iQbk",
  authDomain: "cars-doctors-c8299.firebaseapp.com",
  projectId: "cars-doctors-c8299",
  storageBucket: "cars-doctors-c8299.appspot.com",
  messagingSenderId: "950783175786",
  appId: "1:950783175786:web:9cb1d963604deada7a6e13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;