import React, { useContext, useState } from "react";


const AuthContext = React.createContext(); //uywamy tego kontekstu wewnątrz providera aby miec dostęp do danych w całej aplikacji.

export function useAuth() {
    return useContext(AuthContext); // dostęp do naszego kontekstu uwierzytelniania 
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const value = {
        currentUser
    }
    return (
        < AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider >
    )
}
