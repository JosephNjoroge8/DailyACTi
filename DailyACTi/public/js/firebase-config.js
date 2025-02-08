// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBcRR48XglhSfjeaMYeEwWKsh0LpkN8EDg",
    authDomain: "dailyacti.firebaseapp.com",
    projectId: "dailyacti",
    storageBucket: "dailyacti.firebasestorage.app",
    messagingSenderId: "133309795227",
    appId: "1:133309795227:web:8525f0741500baf240af3e",
    measurementId: "G-NGP6T3SCPF"
    // Add your Firebase config here
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };