// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDADHCIcrAk_jZRneMYI1u-UQwPGfDXLLE",
  authDomain: "bearstore-1ca0d.firebaseapp.com",
  projectId: "bearstore-1ca0d",
  storageBucket: "bearstore-1ca0d.appspot.com",
  messagingSenderId: "673227194034",
  appId: "1:673227194034:web:c177bcc2c2d98a54a293ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();