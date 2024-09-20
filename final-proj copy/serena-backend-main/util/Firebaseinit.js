// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-2wnlnJ1MTP63uXbTeILXBNvqlGyYDNY",
  authDomain: "serena-final.firebaseapp.com",
  projectId: "serena-final",
  storageBucket: "serena-final.appspot.com",
  messagingSenderId: "821059574646",
  appId: "1:821059574646:web:a46e537180b38971be7857",
  measurementId: "G-T294TYGYYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);