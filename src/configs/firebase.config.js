// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeNeDmPdxtOSbypq35YrrTmO3c8JE3CSI",
  authDomain: "otp-authenticator-3ec71.firebaseapp.com",
  projectId: "otp-authenticator-3ec71",
  storageBucket: "otp-authenticator-3ec71.appspot.com",
  messagingSenderId: "914648596036",
  appId: "1:914648596036:web:524c062ffd1159ef2b8611",
  measurementId: "G-5QSME798MJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)