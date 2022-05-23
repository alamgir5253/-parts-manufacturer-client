// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBK9AsvhvQgZN8tF_WIhQgDkWiJzqQ7E5g",
  authDomain: "bike-parts-manufacturers.firebaseapp.com",
  projectId: "bike-parts-manufacturers",
  storageBucket: "bike-parts-manufacturers.appspot.com",
  messagingSenderId: "177453088759",
  appId: "1:177453088759:web:e477c1ec7b5e9850e538f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth