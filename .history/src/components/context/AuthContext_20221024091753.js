import React, { useContext } from 'react' //use context umozliwia dostęp do danych z komponentu na kazdym poziomie drzewa

export function AuthProvider({ children }) {
    const user = {
        login: true,
    };
    return (
        <context.Provider value={{ user }}>
            {children}
        </context.Provider>
    )
}

export function useAuthValue() {
    return useContext(AuthContext)
}