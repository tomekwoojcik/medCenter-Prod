import React, { createContext, useContext } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa

export const authContext = createContext();

const useAuth = () => {
    const context = useContext(authContext);
}
export function AuthProvider({ children }) {
    const user = {
        login: true,
    };
    return (
        <authContext.Provider value={{ user }}>
            {children}
        </authContext.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}