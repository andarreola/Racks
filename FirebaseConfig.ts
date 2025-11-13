// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAd3oOKXzJlkFOKag4_sdOT8BcOTafrQnw",
    authDomain: "racks-c0a6e.firebaseapp.com",
    projectId: "racks-c0a6e",
    storageBucket: "racks-c0a6e.firebasestorage.app",
    messagingSenderId: "617386512217",
    appId: "1:617386512217:web:37bcfbe5a0b5435eef8648",
    measurementId: "G-T45B4ZJ09K"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);