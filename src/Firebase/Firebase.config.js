
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB8DD8E7XoXHzlQAZj-YXgggVSqIRk59gw",
  authDomain: "quieasycart.firebaseapp.com",
  projectId: "quieasycart",
  storageBucket: "quieasycart.appspot.com",
  messagingSenderId: "827557124250",
  appId: "1:827557124250:web:d540218b21c2c0333ce723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
