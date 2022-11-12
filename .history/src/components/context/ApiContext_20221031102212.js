import React from 'react'

const ApiContext = createContext();

const ApiContexProvider = ({ children }) => {

    const handleButton = (el) => {
        el.preventDefault();
        setCheckState(el.target.value)
    }

    return (
        <ApiContex.Provider value={{ handleButton }}>
            {children}
        </ApiContex.Provider>
    )
}

export default ApiContexProvider