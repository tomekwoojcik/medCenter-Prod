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

    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

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

    const apiCityUrl = `http://api.airvisual.com/v2/cities?state=${checkState}&country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b`;

    const [city, setCity] = useState([])
    const [checkCity, setCheckCity] = useState("");

    useEffect(() => {
        fetch(apiCityUrl)
            .then(response => response.json()
                .then(city => { setCity(city.data) })
                .catch((error) => console.log(error))
            )
    }, []);


    const handleCityButton = (el) => {
        el.preventDefault();
        setCheckCity(el.target.value)
    }



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

