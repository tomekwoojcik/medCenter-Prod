
import React, { createContext, useContext, useEffect, useState } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase';



export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider');

    return context;
}



export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const register = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, [])
    return (
        <authContext.Provider value={{ register, login, user }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(authContext)
}




// import {useAuth} from "./context/authContext";

const { } = useAuth