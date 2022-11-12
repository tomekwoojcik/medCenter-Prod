import { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../firebase";
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

    console.log(checkState);

    const API_URL =
        `https://api.airvisual.com/v2/states?country=Poland&key=${process.env.REACT_APP_KEY}`;
    const API_URL_CITY = (state = "Mazovia") =>
        `https://api.airvisual.com/v2/cities?state=${state}&country=Poland&key=${process.env.REACT_APP_KEY}`;

    const [states, setStates] = useState(["Mazovia"]);
    const [cities, setCities] = useState({ list: [] });
    const [checkCity, setCheckCity] = useState("");

    cities.map((el) => {
        console.log(el);
    })


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
                throw new Error(err);
            }
        };
        getData();
    }, []);



    const handleCityButton = (el) => {
        el.preventDefault();
        setCheckCity(el.target.value)

        filtrData(checkCity);
    }
    //-----------------------------------------------------------------
    //--------------------------------------------------------------

    const [pro, setPro] = useState("")

    const handleProfesion = (el) => {
        el.preventDefault();
        setPro(el.target.value)
        filtrDoctor(pro)
    }

    const [profession, setProfession] = useState([])

    const filtrDoctor = (pro) => {
        setProfession(medPerson.filter(el => {
            return el.data.medicalSpecialization.includes(pro);
        })
        )
        // setDataMed(filtrElements)
    }

    //-------------------------------------------------

    const [medPerson, setMedPerson] = useState([])

    const getMed = () => {
        const medCollection = collection(db, `doctorData.json`);
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setMedPerson(meds)
            }).catch(error => { console.log(error.message) })
    }
    useEffect(() => { getMed() }, [])

    let professionMed = medPerson.map(el => { return el.data.medicalSpecialization })
    let uniqeProfessionMed = [... new Set(professionMed)];
    //-------------------------------------------------------------------

    const [medHospital, setMedHospital] = useState([])

    const getMedHospital = () => {
        const medCollection = collection(db, `HospitalData`);
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setMedHospital(meds)
            }).catch(error => { console.log(error.message) })
    }
    useEffect(() => { getMedHospital() }, [])
    //---------------------------------------------------------
    const arrStateNFZ = [];
    medHospital.map((el) => {
        arrStateNFZ.push(el.data.NfzName);
    })

    const uniqeArrStateNFZ = [... new Set(arrStateNFZ)];
    const uniqeArr = uniqeArrStateNFZ.filter(el => { return el !== undefined });
    const lastNfzUniqeArr = uniqeArr.filter(el => { return el !== "Łódzki OW NFZ" });
    //------------------------------------------------------------

    const [filtrElements, setFiltrElements] = useState([])



    const filtrData = (checkCity) => {
        setFiltrElements(medHospital.filter(el => {
            return el.data.NfzName.includes(checkCity);
        })
        )
        // setDataMed(filtrElements)
    }
    //---------------------------------------------------------------------------
    let arrCityHospital = [];
    filtrElements.map((el) => {
        arrCityHospital.push(el.data.City);
    })
    let uniqeArrCityHospital = [... new Set(arrCityHospital)];

    //-------------------------------------------------------------------------


    const [checkHospitalInCity, setcheckHospitalInCity] = useState("");

    const handleHospitalInCityButton = (el) => {
        el.preventDefault();
        setcheckHospitalInCity(el.target.value);

        filtrDataHospitalInCity(checkHospitalInCity);

    }
    const [filtrHospitalInCity, setFiltrHospitalInCity] = useState([])
    let arrHospitalCity = [];


    const filtrDataHospitalInCity = (checkHospitalInCity) => {
        setFiltrHospitalInCity(medHospital.filter(el => {
            return el.data.City.includes(checkHospitalInCity);
        }))
    }

    //-------------------------------------------------------------------------

    filtrHospitalInCity.map((el) => {
        arrHospitalCity.push(el);
    })

    //-------------------------------------------------------------------------

    return (
        <UserContext.Provider value={{ createUser, user, logout, signIn, states, handleButton, cities, handleCityButton, medPerson, handleProfesion, medHospital, lastNfzUniqeArr, filtrElements, uniqeArrCityHospital, handleHospitalInCityButton, filtrHospitalInCity, arrHospitalCity, uniqeProfessionMed }}>
            {children}
        </UserContext.Provider>
    );
};


export const UserAuth = () => {
    return useContext(UserContext);
};


// import {useAuth} from "./context/authContext";

// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 

