import React, { createContext } from 'react'

const ApiContext = createContext();
const ApiProvider = ({ children }) => {

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(state => { setState(state.data) })
                .catch((error) => console.log(error))
            )
    }, []);



    return (
        <ApiContext.Provider value>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider