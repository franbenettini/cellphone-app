import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA30kYNj8n-Sb5pK3T9Tjsr9zVI584AYPk",
  authDomain: "smart-shop-35346.firebaseapp.com",
  projectId: "smart-shop-35346",
  storageBucket: "smart-shop-35346.appspot.com",
  messagingSenderId: "521247928418",
  appId: "1:521247928418:web:885549315e6444bf74613b"
};

const app = initializeApp(firebaseConfig);

export const firestoreDb = getFirestore(app)