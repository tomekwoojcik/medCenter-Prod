import React, { createContext } from 'react'

const ApiContext = createContext();
const ApiProvider = ({ children }) => {





    return (
        <ApiContext.Provider value>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider