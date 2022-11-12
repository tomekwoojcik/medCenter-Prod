import React, { createContext } from 'react'

const ApiContext = createContext();
const ApiProvider = ({ children }) => {

    const getData = () => {

    }


    return (
        <ApiContext.Provider value>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider