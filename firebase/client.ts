
// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCUyqYEGA1M9lustRkKjGeVYmNhpXe-Hss",
  authDomain: "prepwise-d5ee3.firebaseapp.com",
  projectId: "prepwise-d5ee3",
  storageBucket: "prepwise-d5ee3.firebasestorage.app",
  messagingSenderId: "1084843946223",
  appId: "1:1084843946223:web:308aff9b8a6ed12d20ab1a",
  measurementId: "G-RZL8WE71CD"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);