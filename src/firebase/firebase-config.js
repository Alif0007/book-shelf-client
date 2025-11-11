// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAAN7hwYltmdNBzDt1HYJH5LLabHQu58Jw",
    authDomain: "book-shelf-7e579.firebaseapp.com",
    projectId: "book-shelf-7e579",
    storageBucket: "book-shelf-7e579.firebasestorage.app",
    messagingSenderId: "385801731905",
    appId: "1:385801731905:web:d451926882231eda4a6bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app