import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { async } from '@firebase/util';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const [loading, setLoading] = useState(true);//kiedy ładuje się konteks przy logout zmienna niemoze mieć wartości null więc za pomoca loading ja zmieniamy na true gdy uzytkownik juź jest wartość sie zminia na false


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();//anulowanie działania useEffect
        };
    }, []);


    //------------------------------------------

    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=31c5ee2a-1fe1-4bb3-8d01-d0b5160d5d29";

    const [state, setState] = useState([])
    const [checkState, setCheckState] = useState("");

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(state => { setState(state.data) })
                .catch((error) => console.log(error))
            )
    }, []);

    //    await useEffect(() => {
    //         fetch(apiUrl)
    //             .then(response => response.json()
    //                 .then(state => { setState(state.data) })
    //                 .catch((error) => console.log(error))
    //             )
    //     }, []);



    const handleButton = (el) => {
        el.preventDefault();
        setCheckState(el.target.value)
    }

    //--------------------------------------


    const [city, setCity] = useState(null)
    const [checkCity, setCheckCity] = useState("");

    const handleCityButton = (el) => {
        el.preventDefault();
        setCheckCity(el.target.value)
    }

    if (checkCity !== "") {
        const apiCityUrl = `http://api.airvisual.com/v2/cities?state=${checkState}&country=Poland&key=31c5ee2a-1fe1-4bb3-8d01-d0b5160d5d29`;


        // useEffect(() => {
        //     const fetchData = async () => {
        //         fetch(apiCityUrl)
        //             .then(response => response.json()
        //                 .then(city => { setCity(city.data) })
        //                 .catch((error) => console.log(error))
        //             )
        //     };
        //     fetchData();
        // }, []);

        useEffect(() => {
            fetch(apiCityUrl)
                .then(response => response.json()
                    .then(city => { setCity(city.data) })
                    .catch((error) => console.log(error))
                )
            // fetchData();
        }, []);

        handleCityButton()
    }
    // const apiCityUrl = `http://api.airvisual.com/v2/cities?state=${checkState}&country=Poland&key=31c5ee2a-1fe1-4bb3-8d01-d0b5160d5d29`;


    // // useEffect(() => {
    // //     const fetchData = async () => {
    // //         fetch(apiCityUrl)
    // //             .then(response => response.json()
    // //                 .then(city => { setCity(city.data) })
    // //                 .catch((error) => console.log(error))
    // //             )
    // //     };
    // //     fetchData();
    // // }, []);

    // useEffect(() => {
    //     fetch(apiCityUrl)
    //         .then(response => response.json()
    //             .then(city => { setCity(city.data) })
    //             .catch((error) => console.log(error))
    //         )
    //     // fetchData();
    // }, []);

    // const handleCityButton = (el) => {
    //     el.preventDefault();
    //     setCheckCity(el.target.value)
    // }



    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, state, handleButton, city, handleCityButton }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};


// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 

