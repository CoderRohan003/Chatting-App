import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBBmyyqV5g4AP-QZxd4dVsUklUAyH6S7nM",
  authDomain: "chatting-aba4c.firebaseapp.com",
  projectId: "chatting-aba4c",
  storageBucket: "chatting-aba4c.appspot.com",
  messagingSenderId: "224777172192",
  appId: "1:224777172192:web:af3534e317fae9497ecc85",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
