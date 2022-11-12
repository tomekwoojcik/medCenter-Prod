
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
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
export const auth = getAuth(app);
export const db = getFirestore(app)





import React, { createContext, useContext } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider');

    return context;
}



export function AuthProvider({ children }) {

    const register = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    return (
        <authContext.Provider value={{ register }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(authContext)
}