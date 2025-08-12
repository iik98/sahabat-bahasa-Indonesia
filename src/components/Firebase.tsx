// src/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";
import { getStorage } from "firebase/storage";

// Replace with your actual Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDOzc6X-Mj_LiL2rgCA3mJ59_gI8adYdbw",
  authDomain: "sahabat-bahasa-indonesia-63419.firebaseapp.com",
  projectId: "sahabat-bahasa-indonesia-63419",
  storageBucket: "sahabat-bahasa-indonesia-63419.firebasestorage.app",
  messagingSenderId: "512957877130",
  appId: "1:512957877130:web:0c55e2c3e07c34cf679673",
  measurementId: "G-J4Y0J88KZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);
const storage = getStorage(app);

// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

export {
  app,
  auth,
  firestore,
  functions,
  storage,
  googleProvider,
  facebookProvider,
};
