// // Import the functions you need from the SDKs you need
// import firebase from "firebase/app";
// import "firebase/auth";

// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID,
// })

// export const auth = app.auth()
// export default app

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQvDRs6lmejomDRAqpY0dHGBSn1pVno5k",
    authDomain: "medcenter-dev.firebaseapp.com",
    projectId: "medcenter-dev",
    storageBucket: "medcenter-dev.appspot.com",
    messagingSenderId: "224123031882",
    appId: "1:224123031882:web:8036351d22030450e671b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);