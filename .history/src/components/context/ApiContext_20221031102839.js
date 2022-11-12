// import React from 'react'

// const ApiContext = createContext();

// const ApiContexProvider = ({ children }) => {
    
//     const [state, setState] = useState([])
//     const [checkState, setCheckState] = useState("");
//     useEffect(() => {
//         fetch(apiUrl)
//             .then(response => response.json()
//                 .then(city => { setCity(city.data) })
//                 .catch((error) => console.log(error))
//             )
//     }, []);
//     const handleButton = (el) => {
//         el.preventDefault();
//         setCheckState(el.target.value)
//     }

//     return (
//         <ApiContex.Provider value={{ handleButton }}>
//             {children}
//         </ApiContex.Provider>
//     )
// }

// export default ApiContexProvider