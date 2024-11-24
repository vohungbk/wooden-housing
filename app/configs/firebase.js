import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "wooden-housing-c0ee8.firebaseapp.com",
  projectId: "wooden-housing-c0ee8",
  storageBucket: "wooden-housing-c0ee8.firebasestorage.app",
  messagingSenderId: "975564856561",
  appId: "1:975564856561:web:5e9d0e2077b690c0305d50",
  measurementId: "G-P9BBMRH6H2",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const db = getFirestore(app);

export default auth;
