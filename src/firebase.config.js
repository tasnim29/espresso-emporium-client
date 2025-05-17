import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDZM3JcDYXkD3rIm9q3ar-S-ij2mNhsJk",
  authDomain: "espresso-emporium-b7d0d.firebaseapp.com",
  projectId: "espresso-emporium-b7d0d",
  storageBucket: "espresso-emporium-b7d0d.firebasestorage.app",
  messagingSenderId: "537603156611",
  appId: "1:537603156611:web:4f0d7b397c8707215e49b6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
