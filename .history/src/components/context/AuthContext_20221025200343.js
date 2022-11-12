
import React, { createContext, useContext, useEffect, useState } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
    };
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        signOut(auth);
    };
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        })
    }, []);
    return (
        <authContext.Provider value={{ register, login, user, logout }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(authContext)
}




// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku