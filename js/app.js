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

// Add these to your existing imports at the top
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signOut 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 1. Initialize Auth
const auth = getAuth();
const provider = new GoogleAuthProvider();

// 2. Grab UI Elements
const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const userDetails = document.getElementById('user-details');
const userName = document.getElementById('user-name');
const userPic = document.getElementById('user-pic');

// 3. The Login Function
loginBtn.addEventListener('click', () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("Logged in as:", result.user.displayName);
        }).catch((error) => {
            console.error("Auth Error:", error.message);
        });
});

// 4. The Logout Function
logoutBtn.addEventListener('click', () => {
    signOut(auth);
});

// 5. THE OBSERVER (The "Brain" of your Auth)
// This runs automatically whenever login status changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in
        loginBtn.style.display = 'none';
        logoutBtn.style.display = 'block';
        userDetails.style.display = 'block';
        userName.innerText = user.displayName;
        userPic.src = user.photoURL;
    } else {
        // User is signed out
        loginBtn.style.display = 'block';
        logoutBtn.style.display = 'none';
        userDetails.style.display = 'none';
    }
});
