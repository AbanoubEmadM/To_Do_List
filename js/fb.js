// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnCqjaAAF0f-R3Dr0n-8nkf7R0tWnpXXo",
  authDomain: "todolist-b8535.firebaseapp.com",
  projectId: "todolist-b8535",
  storageBucket: "todolist-b8535.appspot.com",
  messagingSenderId: "613013258930",
  appId: "1:613013258930:web:97c73d97aeccaf792dbfab",
  measurementId: "G-W4LMRH8EF7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);