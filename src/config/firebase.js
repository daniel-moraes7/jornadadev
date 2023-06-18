// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyDl4YhyN6X3FNll9ZskKjC39Cu3mEvZHSo",
    authDomain: "tiktok---jornadadevv.firebaseapp.com",
    projectId: "tiktok---jornadadevv",
    storageBucket: "tiktok---jornadadevv.appspot.com",
    messagingSenderId: "861050784407",
    appId: "1:861050784407:web:8500a3258f82ad10f7b7d2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;