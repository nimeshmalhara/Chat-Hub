// Firebase SDK වලින් අවශ්‍ය functions import කරන්න
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Firebase Analytics module
import { getAuth } from "firebase/auth"; // Firebase Authentication module
import { getFirestore } from "firebase/firestore"; // Firebase Firestore module

// ඔබගේ web app එකේ Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbjvioxqhmG7ANGV_BAxA9JanrO-U7dCs", // API key
  authDomain: "chat-hub-da91c.firebaseapp.com", // Auth domain
  projectId: "chat-hub-da91c", // Project ID
  storageBucket: "chat-hub-da91c.firebasestorage.app", // Storage bucket
  messagingSenderId: "510863768381", // Messaging sender ID
  appId: "1:510863768381:web:8f535b162f143d367f2354", // App ID
  measurementId: "G-T9KTD3MSVY" // Measurement ID (optional)
};

// Firebase initialize කිරීම
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Firebase Analytics initialize කිරීම
const auth = getAuth(app); // Firebase Authentication initialize කිරීම
const db = getFirestore(app); // Firebase Firestore initialize කිරීම

// Authentication සහ Firestore modules export කිරීම
export { auth, db };
