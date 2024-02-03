// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2w6aHUXAbyAMt0VKGRfOB2Vb8-b4WkXI",
  authDomain: "shopcart-4fa48.firebaseapp.com",
  projectId: "shopcart-4fa48",
  storageBucket: "shopcart-4fa48.appspot.com",
  messagingSenderId: "415809574001",
  appId: "1:415809574001:web:8ebec7b65d9ffc39feb7d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)