
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
    const [loading, setLoading] = useState(true);//kiedy ładuje się konteks przy logout zmienna niemoze mieć wartości null więc za pomoca loading ja zmieniamy na true gdy uzytkownik juź jest wartość sie zminia na false

    const register = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, toString(email), toString(password)
        )
    };
    // const register = (email, password) => {
    //     const auth = getAuth();
    //     createUserWithEmailAndPassword(auth, email, password)
    // };
    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unsubscribe(); //anulowanie działania useEffect
    }, []);
    return (
        <authContext.Provider value={{ register, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(authContext)
}




// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 