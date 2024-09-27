// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCtSFDCYUx1_iUrTHhkGEJ_jVI_MBooig",
  authDomain: "somativa-2-react-app.firebaseapp.com",
  projectId: "somativa-2-react-app",
  storageBucket: "somativa-2-react-app.appspot.com",
  messagingSenderId: "209473681784",
  appId: "1:209473681784:web:f60df5ff4f3e9b4e92308d",
  measurementId: "G-J5YECZ6J0Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
