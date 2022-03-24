import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG4lJl1fVlszRSVDzuICtRyp7e3_oaH3g",
  authDomain: "authentication-9519b.firebaseapp.com",
  projectId: "authentication-9519b",
  storageBucket: "authentication-9519b.appspot.com",
  messagingSenderId: "376909850771",
  appId: "1:376909850771:web:9c47e957e3b67dc148c566",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
