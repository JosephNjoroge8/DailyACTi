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
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();