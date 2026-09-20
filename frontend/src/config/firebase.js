
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBrfQRU8G0c0dzeGkGNHW-9SazFAO60KQU",
  authDomain: "blog-app-51cf5.firebaseapp.com",
  projectId: "blog-app-51cf5",
  storageBucket: "blog-app-51cf5.firebasestorage.app",
  messagingSenderId: "663600761001",
  appId: "1:663600761001:web:bd7658db10c2462c1681b8",
  measurementId: "G-WW6TJRHSPQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;