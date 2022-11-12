import React, { useState, createContext } from 'react'
const apiContext = createContext()
const ApiContextProvider = ({ children }) => {

    const [state, setState] = useState([])

    const getApi = () => {
        useEffect(() => {
            fetch(apiUrl)
                .then(response => response.json()
                    .then(state => { setState(state.data) })
                    .catch((error) => console.log(error))
                )
        }, []);

    }

    return

}

export default ApiContextProvider
