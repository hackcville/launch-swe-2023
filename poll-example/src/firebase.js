// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/*
const firebaseConfig = {
  apiKey: "AIzaSyCqq7GCdvnBk-PJh0HdAiVqPspMECk-M3k",
  authDomain: "poll-app-16853.firebaseapp.com",
  projectId: "poll-app-16853",
  storageBucket: "poll-app-16853.appspot.com",
  messagingSenderId: "326690224012",
  appId: "1:326690224012:web:7f3f8d0444c63c761088a9",
};
*/
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: "poll-app-16853.firebaseapp.com",
  projectId: "poll-app-16853",
  storageBucket: "poll-app-16853.appspot.com",
  messagingSenderId: "326690224012",
  appId: "1:326690224012:web:7f3f8d0444c63c761088a9",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
