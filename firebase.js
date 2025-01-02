import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyCNjS91fECSSFP9dE2zWRAnQfk3n8Q1GBQ",
    authDomain: "login-signup-form-842c5.firebaseapp.com",
    projectId: "login-signup-form-842c5",
    storageBucket: "login-signup-form-842c5.firebasestorage.app",
    messagingSenderId: "532436702666",
    appId: "1:532436702666:web:db1a1117edc08f599c2b33",
    databaseURL:'https://login-signup-form-842c5-default-rtdb.firebaseio.com/'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);