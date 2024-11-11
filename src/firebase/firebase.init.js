// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB19JNTynMnHeAfoilBwAHrw2_jcpgn5cc",
  authDomain: "moha-milon-fb6c4.firebaseapp.com",
  projectId: "moha-milon-fb6c4",
  storageBucket: "moha-milon-fb6c4.firebasestorage.app",
  messagingSenderId: "1063074932717",
  appId: "1:1063074932717:web:5296bda5237bf6235b29e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
