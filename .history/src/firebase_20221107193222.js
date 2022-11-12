import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_AuthDomain,
    projectId: "medcenter-dev",
    storageBucket: "medcenter-dev.appspot.com",
    messagingSenderId: "224123031882",
    appId: "1:224123031882:web:8036351d22030450e671b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)