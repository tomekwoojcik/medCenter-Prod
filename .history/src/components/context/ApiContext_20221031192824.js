import React, { createContext, useState, useEffect } from 'react'

const ApiContext = createContext();
export function ApiProvider({ children }) {

    const [state, setState] = useState([])

    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(state => { setState(state.data) })
                .catch((error) => console.log(error))
            )
    }, []);



    return (
        <ApiContext.Provider value={state}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiContext;