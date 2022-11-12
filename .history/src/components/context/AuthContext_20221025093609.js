
import React, { createContext, useContext } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa
import { createUserWithEmailAndPassword, onAuthStateChanged, getAuth } from "firebase/auth";



export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider');

    return context;
}

const auth = getAuth();


export function AuthProvider({ children }) {


    const register = (email, password) => {
        // createUserWithEmailAndPassword(auth, email, password)
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