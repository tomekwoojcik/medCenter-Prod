import React, { createContext, useContext, useState } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa
import { auth } from ".../firebase";
const AuthContext = React.createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const register = async (email, password) => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
        }
        catch (error) {
            console.log(error.message)
        }
    }

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