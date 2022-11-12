import React, { useState, createContext } from 'react'
const apiContext = createContext()
const ApiContextProvider = ({ children }) => {

    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";
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
