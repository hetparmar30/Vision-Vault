import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.SECRET,
  authDomain: "video-3cdc7.firebaseapp.com",
  projectId: "video-3cdc7",
  storageBucket: "video-3cdc7.appspot.com",
  messagingSenderId: "1046465917245",
  appId: "1:1046465917245:web:e1789339f56d467f5ed554",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
