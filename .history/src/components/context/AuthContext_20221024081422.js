import React, { useContext } from "react";


const AuthContext = React.createContext(); //uywamy tego kontekstu wewnątrz providera aby miec dostęp do danych w całej aplikacji.

export function useAuth() {
    return useContext(AuthContext); // dostęp do naszego kontekstu uwierzytelniania 
}

export function AuthProvider({ children }) {
    return (
        < AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider >
    )
}
