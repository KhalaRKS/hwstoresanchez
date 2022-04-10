import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyJHF-mSq7tyrpsB-rkYkiZJcdsPtfgls",
  authDomain: "test-rjs.firebaseapp.com",
  projectId: "test-rjs",
  storageBucket: "test-rjs.appspot.com",
  messagingSenderId: "103367545356",
  appId: "1:103367545356:web:42a0c5c358517d143d9429"
};

const app = initializeApp(firebaseConfig);
export const dbFirestore = getFirestore(app)
export const fbCollection = collection(dbFirestore, 'products')
export const fbCollectionOrders = collection(dbFirestore, 'orders')


