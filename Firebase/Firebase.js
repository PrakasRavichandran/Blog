// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJf7kgZvWbWhZJPsy1zr0jrolacFlVFq8",
  authDomain: "dev-blog-3d8f2.firebaseapp.com",
  projectId: "dev-blog-3d8f2",
  storageBucket: "dev-blog-3d8f2.appspot.com",
  messagingSenderId: "49779678387",
  appId: "1:49779678387:web:ba41e2582977485de3a4c6",
  measurementId: "G-EJPBYL5G8B"
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };


