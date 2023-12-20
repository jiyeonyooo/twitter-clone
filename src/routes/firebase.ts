import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvSD4eZYcHgiMcPDLfbAHJxj6VqR4NDFc",
  authDomain: "twitter-clone-24a00.firebaseapp.com",
  projectId: "twitter-clone-24a00",
  storageBucket: "twitter-clone-24a00.appspot.com",
  messagingSenderId: "486718678644",
  appId: "1:486718678644:web:5edbb016183ea163259321"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);