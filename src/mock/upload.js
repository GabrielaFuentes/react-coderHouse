
import MOCK_DATA from './data.json' assert { type: 'json'}


import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx600WvskfsloOMBal9iqbQPtnEZWtAL4",
  authDomain: "e-commerce-coderhouse-484c1.firebaseapp.com",
  projectId: "e-commerce-coderhouse-484c1",
  storageBucket: "e-commerce-coderhouse-484c1.appspot.com",
  messagingSenderId: "157003206644",
  appId: "1:157003206644:web:0180eedfbe22174e3b73a1"
};

const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);

const productosRef = collection(db, 'productos')

MOCK_DATA.forEach(item => {
    delete item.id
    console.log(MOCK_DATA)

    addDoc(productosRef, item)
})