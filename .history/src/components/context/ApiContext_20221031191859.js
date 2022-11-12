import React, { createContext, useEffect } from 'react'

const ApiContext = createContext();
const ApiProvider = ({ children }) => {

    const [state, setState] = useState([])


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

export default ApiProvider