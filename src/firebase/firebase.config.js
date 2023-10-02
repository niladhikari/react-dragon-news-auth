// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBybwMlhxHILKSy67pneRUoqJP4b-_Ty4c",
  authDomain: "react-dragon-news-auth-7cb4c.firebaseapp.com",
  projectId: "react-dragon-news-auth-7cb4c",
  storageBucket: "react-dragon-news-auth-7cb4c.appspot.com",
  messagingSenderId: "62403273250",
  appId: "1:62403273250:web:9a647c401713ea368be07b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;