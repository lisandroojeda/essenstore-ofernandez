// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkdjK0A-PolMQ4iG8UnPEvgxq18mTh-I0",
    authDomain: "essen-storev1.firebaseapp.com",
    projectId: "essen-storev1",
    storageBucket: "essen-storev1.appspot.com",
    messagingSenderId: "655548696162",
    appId: "1:655548696162:web:66a7b6334f16ef3071b33b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);