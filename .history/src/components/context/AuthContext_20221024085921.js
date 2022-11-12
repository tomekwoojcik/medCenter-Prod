import React, { useContext, useState } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa

const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}