



import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCTMLy8KjQsJZbyEMChHMPnRa__VvwTpXA",
  authDomain: "asap-kampany.firebaseapp.com",
  projectId: "asap-kampany",
  storageBucket: "asap-kampany.appspot.com",
  messagingSenderId: "943396121827",
  appId: "1:943396121827:web:e25aaf2b7a56f33318e9d6",
  measurementId: "G-4YSGV4C7BK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);


export default app;