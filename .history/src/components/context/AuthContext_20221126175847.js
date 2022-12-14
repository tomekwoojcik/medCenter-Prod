
import { createContext, useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { db, auth } from '../../firebase'
import { collection, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'

const UserContext = createContext()

// eslint-disable-next-line react/prop-types
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [checkState, setCheckState] = useState('')
  const [states, setStates] = useState(['Lesser Poland Voivodeship'])
  const [cities, setCities] = useState([])
  const [checkCity, setCheckCity] = useState('')
  const [medPerson, setMedPerson] = useState([])
  const [dataConnectSetMedPerson, setDataConnectSetMedPerson] = useState([])
  const [dataConnect, setDataConnect] = useState([])
  const [medHospital, setMedHospital] = useState([])
  const [filtrElements, setFiltrElements] = useState([])
  const [checkHospitalInCity, setcheckHospitalInCity] = useState('')
  const [filtrHospitalInCity, setFiltrHospitalInCity] = useState([])
  const [handleHospital, setHandleHospital] = useState('')
  const [filtrHospital, setFiltrHospital] = useState([])
  const [pro, setPro] = useState('')
  const [hidden, setHidden] = useState(false)
  const [hiddenSec, setHiddenSec] = useState(false)
  const [hiddenThr, setHiddenThr] = useState(false)
  const [wordOne, setWordOne] = useState('')
  const [wordSec, setWordSec] = useState('')
  const [wordThr, setWordThr] = useState('')

  const arr = [checkState, checkCity, loading, checkHospitalInCity, handleHospital, filtrHospital, pro]
  arr.forEach((el) => { return el })

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = () => {
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  const cityApi = async (city) => {
    try {
      const requestStates = await fetch(API_URL_CITY(city))
      const responseStates = await requestStates.json()
      setCities(responseStates.data)
    } catch (err) {
      throw new Error(err)
    }
  }

  const handleButton = (el) => {
    el.preventDefault()
    setCheckState(el.target.value)
    cityApi(el.target.value)
    filtrDataState(el.target.value)
    setHiddenThr(false)
  }

  const API_URL =
        'https://api.airvisual.com/v2/states?country=Poland&key=33289d9a-a67b-4980-ba75-64eec0270ef5'
  const API_URL_CITY = (state = 'Lesser Poland Voivodeship') =>
        `https://api.airvisual.com/v2/cities?state=${state}&country=Poland&key=33289d9a-a67b-4980-ba75-64eec0270ef5`

  useEffect(() => {
    const getData = async () => {
      try {
        const requestStates = await fetch(API_URL)
        const responseStates = await requestStates.json()
        setStates(responseStates.data)
      } catch (err) {
        throw new Error(err)
      }
    }
    getData()
  }, [])

  const handleCityButton = (el) => {
    el.preventDefault()
    setCheckCity(el.target.value)

    filtrData(el.target.value)
    API_URL_CITY(states)
    setHiddenSec(false)
  }
  const getMed = () => {
    const medCollection = collection(db, 'doctorData.json')
    getDocs(medCollection)
      .then(response => {
        const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
        setMedPerson(meds)
        setDataConnectSetMedPerson(meds)
      }).catch(error => { console.log(error.message) })
  }
  useEffect(() => { getMed() }, [])

  const filtrDataState = (checkCity) => {
    const arr = dataConnectSetMedPerson.filter(el => {
      return el.data.States.includes(checkCity)
    })
    setMedPerson(arr)
  }

  const handleCity = (el) => {
    el.preventDefault()
    filtrDataCity(el.target.value)
    setHiddenSec(false)
  }

  const filtrDataCity = (checkCity) => {
    const arr = dataConnectSetMedPerson.filter(el => {
      return el.data.city.includes(checkCity)
    })
    setMedPerson(arr)
  }

  const professionMed = dataConnectSetMedPerson.map(el => { return el.data.medicalSpecialization })
  const uniqeProfessionMed = [...new Set(professionMed)]

  const handleProfesion = (el) => {
    el.preventDefault()
    setPro(el.target.value)
    filtrDoctor(el.target.value)
    setHidden(false)
  }

  const filtrDoctor = (pro) => {
    const arr = dataConnectSetMedPerson.filter(el => {
      return el.data.medicalSpecialization.includes(pro)
    })
    // setDataMed(filtrElements)
    setMedPerson(arr)
  }
  // -------------------------------------------------------------------

  const getMedHospital = () => {
    const medCollection = collection(db, 'HospitalData')
    getDocs(medCollection)
      .then(response => {
        const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
        setMedHospital(meds)
        setDataConnect(meds)
      }).catch(error => { console.log(error.message) })
  }
  useEffect(() => { getMedHospital() }, [])

  // ---------------------------------------------------------
  const arrStateNFZ = []
  medHospital.forEach((el) => {
    arrStateNFZ.push(el.data.NfzName)
  })

  const uniqeArrStateNFZ = [...new Set(arrStateNFZ)]
  const uniqeArr = uniqeArrStateNFZ.filter(el => { return el !== undefined })
  const lastNfzUniqeArr = uniqeArr.filter(el => { return el !== '????dzki OW NFZ' })

  const ar = lastNfzUniqeArr.filter((el) => { return el.toLowerCase().includes(wordOne.toLowerCase()) })
  console.log(ar)

  // ------------------------------------------------------------

  const filtrData = (checkCity) => {
    const arr = medHospital.filter(el => {
      return el.data.NfzName.includes(checkCity)
    })
    setDataConnect(arr)
    setFiltrElements(arr)
  }
  // ---------------------------------------------------------------------------
  const arrCityHospital = []
  filtrElements.forEach((el) => {
    arrCityHospital.push(el.data.City)
  })
  const uniqeArrCityHospital = [...new Set(arrCityHospital)]

  // -------------------------------------------------------------------------

  const handleHospitalInCityButton = (el) => {
    el.preventDefault()
    setcheckHospitalInCity(el.target.value)

    filtrDataHospitalInCity(el.target.value)
    setHidden(false)
  }

  const arrHospitalCity = []

  const filtrDataHospitalInCity = (checkHospitalInCity) => {
    const arr = medHospital.filter(el => {
      return el.data.City.includes(checkHospitalInCity)
    })
    setDataConnect(arr)
    setFiltrHospitalInCity(arr)
  }

  // -------------------------------------------------------------------------

  filtrHospitalInCity.forEach((el) => {
    arrHospitalCity.push(el)
  })

  const selectHospital = (el) => {
    el.preventDefault()
    setHandleHospital(el.target.value)
    filtrSelectHospital(el.target.value)
    setHiddenThr(false)
  }

  const filtrSelectHospital = (handleHospital) => {
    const arr = medHospital.filter(el => {
      return el.data.HospitalName.includes(handleHospital)
    })
    setDataConnect(arr)
    setFiltrHospital(arr)
  }
  // -------------------------------------------------------------------------
  const [registrations, setRegistrations] = useState([])

  const getRegistration = () => {
    const registrationCollection = collection(db, 'usersRegistrationCalendar')
    getDocs(registrationCollection)
      .then(response => {
        const regs = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
        setRegistrations(regs)
      }).catch(error => { console.log(error.message) })
  }
  useEffect(() => { getRegistration() }, [])

  const date = new Date()

  const handleRegistration = async (el) => {
    el.preventDefault()
    await addDoc(collection(db, 'usersRegistrationCalendar'), {
      user: user.email,
      doctorId: el.target.value,
      dateRegistration: date,
      dateOfTheVisit: null,
      hourOfTheVisit: null
    })
  }
  // -----------------------------
  let userRegistration = []

  if (user !== null) {
    userRegistration = registrations.filter(el => {
      return el.data.user.includes(user.email)
    })
  }

  // -------------------------------------------------------------------------------------------
  const nullToEndRegistration = userRegistration.filter((el) => {
    return el.data.dateOfTheVisit === null && el.data.hourOfTheVisit === null
  })
  const notificationNumber = nullToEndRegistration.length
  let person = []
  nullToEndRegistration.forEach(first => {
    person = medPerson.filter(second => {
      return second.id.includes(first.data.doctorId)
    })
  }))
  // -------------------------------------------------------------------------------------------
  const [book, setBook] = useState('')
  const sendData = (dataId, inputDate, inputTime) => {
    const updateData = doc(db, 'usersRegistrationCalendar', `${dataId}`)
    updateDoc(updateData, {
      dateOfTheVisit: inputDate,
      hourOfTheVisit: inputTime
    }).then(() => { alert('ok') }).catch((error) => { alert(error.message) })
  }

  // ---------------------------------------------------------------------

  const readyRegistration = userRegistration.filter((el) => {
    return el.data.dateOfTheVisit !== null && el.data.hourOfTheVisit !== null
  })
  // -------------------------------------------------------------------
  return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <UserContext.Provider value={{ createUser, user, logout, signIn, states, handleButton, cities, handleCityButton, medPerson, handleProfesion, medHospital, lastNfzUniqeArr, filtrElements, uniqeArrCityHospital, handleHospitalInCityButton, filtrHospitalInCity, arrHospitalCity, uniqeProfessionMed, dataConnect, selectHospital, handleCity, handleRegistration, notificationNumber, nullToEndRegistration, person, book, setBook, sendData, readyRegistration, setHidden, hidden, hiddenSec, setHiddenSec, hiddenThr, setHiddenThr, wordOne, setWordOne, ar }}>
            {children}
        </UserContext.Provider>
  )
}
export const UserAuth = () => {
  return useContext(UserContext)
}
// import {useAuth} from "./context/authContext";
// eslint-disable-next-line eol-last
// const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji kt??re umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}>