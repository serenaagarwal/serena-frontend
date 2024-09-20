// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBegngF4Xf0LputMuHHP4ieFbGDExpZujA",
  authDomain: "bootcampday4.firebaseapp.com",
  projectId: "bootcampday4",
  storageBucket: "bootcampday4.appspot.com",
  messagingSenderId: "585211812875",
  appId: "1:585211812875:web:0bed5758f7fe29de9ffb0e",
  measurementId: "G-ML50RXZ27P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);