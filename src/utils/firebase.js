// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa4fp30OcOBhTMTJuBOvtdZ6bqfi5qBR8",
  authDomain: "netflix-gpt-40873.firebaseapp.com",
  projectId: "netflix-gpt-40873",
  storageBucket: "netflix-gpt-40873.appspot.com",
  messagingSenderId: "493559236240",
  appId: "1:493559236240:web:6c74c9d536702960d6ba15",
  measurementId: "G-TPPK9P8LGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();