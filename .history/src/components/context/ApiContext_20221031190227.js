import React from 'react'

const ApiContext = createContext();

const ApiContexProvider = ({ children }) => {
    return (
        <ApiContex.Provider value={{ handleButton }}>
            {children}
        </ApiContex.Provider>
    )
}

export default ApiContexProvider;