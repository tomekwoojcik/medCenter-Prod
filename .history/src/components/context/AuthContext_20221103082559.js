import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { async } from '@firebase/util';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";


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
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();//anulowanie działania useEffect
        };
    }, []);


    //------------------------------------------

    const [checkState, setCheckState] = useState("");

    const handleButton = (el) => {
        el.preventDefault();
        setCheckState(el.target.value);
    }
    // console.log(state)
    //--------------------------------------

    // const apiCityUrl = `http://api.airvisual.com/v2/cities?state=${stateApi}&country=Poland&key=31c5ee2a-1fe1-4bb3-8d01-d0b5160d5d29`;

    // const [city, setCity] = useState([])
    // const [checkCity, setCheckCity] = useState("");

    // useEffect(() => {
    //     fetch(apiCityUrl)
    //         .then(response => response.json()
    //             .then(city => { setCity(city.data) })
    //             .catch((error) => console.log(error))
    //         )
    // }, []);


    // const handleCityButton = (el) => {
    //     el.preventDefault();
    //     setCheckCity(el.target.value)
    // }

    const API_URL =
        "https://api.airvisual.com/v2/states?country=Poland&key=0a020c3f-f187-4c88-85d0-5b9afa8781ca";
    const API_URL_CITY = (state = "Mazovia") =>
        `https://api.airvisual.com/v2/cities?state=${state}&country=Poland&key=0a020c3f-f187-4c88-85d0-5b9afa8781ca`;

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState({ list: [] });
    const [checkCity, setCheckCity] = useState("");


    useEffect(() => {
        const getData = async () => {
            try {
                const requestStates = await fetch(API_URL);
                const responseStates = await requestStates.json();
                setStates(responseStates.data);

                !!states.length &&
                    states.map(async (state) => {
                        const requestCities = await fetch(API_URL_CITY(state));
                        const responseCities = await requestCities.json();
                        setCities((prevState) => {
                            return { list: [...prevState.list, responseCities] };
                        });
                        console.log(cities.list);
                    });
            } catch (err) {
                console.log(err);
                throw new Error(err);

            }
        };
        getData();
    }, []);
    const handleCityButton = (el) => {
        el.preventDefault();
        setCheckCity(el.target.value)
    }
    console.log(cities)
    //-----------------------------------------------------------------
    const [dataMed, setDataMed] = useState([])

    const getDataMed = () => {
        const medCollection = collection(db, 'MedProfession');
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setDataMed(meds)
            }).catch(error => { console.log(error.message) })
    }

    useEffect(() => { getDataMed() }, [])
    console.log(dataMed);
    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, states, handleButton, cities, handleCityButton }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};


// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 

