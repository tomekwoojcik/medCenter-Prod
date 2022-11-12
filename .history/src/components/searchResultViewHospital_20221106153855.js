import React from 'react'
import { UserAuth } from './context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';


const SearchResultViewHospital = () => {
    const { medHospital } = UserAuth()
    console.log(medHospital.id);
    return (

        <div className="search_container">
            {
                medHospital.map((el) => {
                    return (
                        <div key={el.id}>
                            <p>Nazwa wojewódzkiego odziału NFZ: {el.data.nazwaOddziałuNFZ}</p>
                            <p>Numer wojewódzkiego odziału NFZ: {el.data.nrOdziałuNFZ}</p>
                            <p>Nazwa szpitala: {el.data.HospitalName}</p>
                            <p>Miejscowość: {el.data.City}</p>
                            <p>Adress szpitala: {el.data.AdresSzpitalu}</p>
                            <p>Numer telefonu: {el.data.HospitalNumber}</p>
                            <p>Adress email: {el.data.HospitalEmail}</p>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default SearchResultViewHospital