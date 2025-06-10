// firebase/client.ts

import { initializeApp, getApp, getApps } from "firebase/app";
import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGxSBD4WcHnNb0wLUTt7XkLiyTgL2qj7s",
    authDomain: "crackcode-d4418.firebaseapp.com",
    projectId: "crackcode-d4418",
    storageBucket: "crackcode-d4418.firebasestorage.app",
    messagingSenderId: "194262036965",
    appId: "1:194262036965:web:2b103dd9e0902e9890bf0c",
    measurementId: "G-0D3HBB1MG0",
};

// Initialize Firebase app
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth
const auth = getAuth(app);

// ✅ Set browser persistence so user stays logged in
setPersistence(auth, browserLocalPersistence).catch((error) => {
    console.error("Failed to set auth persistence:", error);
});

export { auth };
export const db = getFirestore(app);
