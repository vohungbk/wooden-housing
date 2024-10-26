import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FISEBASE_API_KEY,
  authDomain: "woodenhousing-48e9b.firebaseapp.com",
  projectId: "woodenhousing-48e9b",
  storageBucket: "woodenhousing-48e9b.appspot.com",
  messagingSenderId: "424149034900",
  appId: "1:424149034900:web:33d95bea4f247eaff69181",
  measurementId: "G-JWQZJV973D",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const db = getFirestore(app);

export default auth;
