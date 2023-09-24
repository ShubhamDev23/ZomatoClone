import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBdUBlCZUAyWIgBdb-PgnABx44E4jHc838",
  authDomain: "zomato-clone-adb45.firebaseapp.com",
  projectId: "zomato-clone-adb45",
  storageBucket: "zomato-clone-adb45.appspot.com",
  messagingSenderId: "591931734669",
  appId: "1:591931734669:web:bcef80f5c8bfe33e8940c4",
  measurementId: "G-0ZWF19CCSH"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const signwithgoogle=new GoogleAuthProvider();
export {auth,signwithgoogle};