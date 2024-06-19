// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAN85Jf_NnjwAQ61XTtWunh4YX-7f7MKls",
  authDomain: "mediconnect-3475b.firebaseapp.com",
  projectId: "mediconnect-3475b",
  storageBucket: "mediconnect-3475b.appspot.com",
  messagingSenderId: "1083186736166",
  appId: "1:1083186736166:web:d0a17e7ee203d723c80ae7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
