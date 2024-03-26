// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBn89IWK0-m5O9DltW0M6By_rWUi2ZRNug",
    authDomain: "next-auth-3db16.firebaseapp.com",
    projectId: "next-auth-3db16",
    storageBucket: "next-auth-3db16.appspot.com",
    messagingSenderId: "618580369573",
    appId: "1:618580369573:web:782df15a37f491dc162d4c"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();
export { app, db, auth }