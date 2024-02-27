
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore, collection,addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKjM1Hj1PqI-F44FY3N8FQSZsnVUQzxf4",
  authDomain: "cafe-web-app-6af28.firebaseapp.com",
  projectId: "cafe-web-app-6af28",
  storageBucket: "cafe-web-app-6af28.appspot.com",
  messagingSenderId: "583440162315",
  appId: "1:583440162315:web:a7405b6ebeae08d684710e"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);
export default app;
export {db, collection, addDoc};