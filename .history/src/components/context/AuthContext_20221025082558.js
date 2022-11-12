import React, { createContext, useContext } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) throw new Error('There is not auth provider');

    return context;
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
    return useContext(authContext)
}