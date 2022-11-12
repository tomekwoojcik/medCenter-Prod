import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';

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

    const [state, setState] = useState([])

    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(state => { setState(state.data) })
                .catch((error) => console.log(error))
            )
    }, []);

    const handleButton = (el) => {
        el.preventDefault();
        setCheckState(el.target.value)
    }

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, state }}>
            {children}
        </UserContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(UserContext);
};


// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 

