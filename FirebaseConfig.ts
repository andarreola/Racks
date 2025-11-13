// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPsQtcUYWqXmd4Ts8Il0uYesInpd1Q9cQ",
    authDomain: "fitnessapp-d3bb7.firebaseapp.com",
    projectId: "fitnessapp-d3bb7",
    storageBucket: "fitnessapp-d3bb7.firebasestorage.app",
    messagingSenderId: "187412384078",
    appId: "1:187412384078:web:bb2fdc011ba5d8fec0361f",
    measurementId: "G-DX2G910GBZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);