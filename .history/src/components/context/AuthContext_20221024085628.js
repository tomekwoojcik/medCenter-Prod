import React, { useContext } from 'react' //use context umozliwia dostęp

const AuthContext = React.createContext()

export function AuthProvider({ children, value }) {
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}