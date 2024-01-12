// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDx600WvskfsloOMBal9iqbQPtnEZWtAL4",
  authDomain: "e-commerce-coderhouse-484c1.firebaseapp.com",
  projectId: "e-commerce-coderhouse-484c1",
  storageBucket: "e-commerce-coderhouse-484c1.appspot.com",
  messagingSenderId: "157003206644",
  appId: "1:157003206644:web:0180eedfbe22174e3b73a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);