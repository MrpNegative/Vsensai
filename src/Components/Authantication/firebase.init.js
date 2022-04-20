import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-OI-tDasAFvCNZHdgA2UOHrPYvuXofFM",
  authDomain: "vsensai0.firebaseapp.com",
  projectId: "vsensai0",
  storageBucket: "vsensai0.appspot.com",
  messagingSenderId: "559871489516",
  appId: "1:559871489516:web:28c5571425a54253ca3cc9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;