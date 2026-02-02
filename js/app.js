// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Your web app's Firebase configuration
// PASTE YOUR ACTUAL CONFIG HERE FROM THE FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "palmy-dev.firebaseapp.com",
  projectId: "palmy-dev",
  storageBucket: "palmy-dev.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef12345"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Quick test to see if it's working
const statusEl = document.getElementById('status');

async function testConnection() {
    try {
        statusEl.innerText = "Palmy Team: Firebase Connected! 🔥";
        console.log("Firebase App Initialized:", app.name);
    } catch (error) {
        statusEl.innerText = "Connection failed. Check console.";
        console.error(error);
    }
}

testConnection();
