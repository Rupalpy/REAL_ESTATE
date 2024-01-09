// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-6a5f8.firebaseapp.com",
  projectId: "real-estate-6a5f8",
  storageBucket: "real-estate-6a5f8.appspot.com",
  messagingSenderId: "681106098111",
  appId: "1:681106098111:web:d6862952e5eff5be6e830a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);