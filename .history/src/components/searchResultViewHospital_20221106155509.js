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
                        <div className='el_hospitalList' key={el.id}>
                            <div>
                                <p>Nazwa wojewódzkiego odziału NFZ: {el.data.nazwaOddziałuNFZ}</p>
                                <p>Numer wojewódzkiego odziału NFZ: {el.data.nrOdziałuNFZ}</p>
                            </div>
                            <div>
                                <p>Nazwa szpitala: {el.data.HospitalName}</p>
                                <p>Miejscowość: {el.data.City}</p>
                                <p>Adress szpitala: {el.data.AdresSzpitalu}</p>
                            </div>
                            <div>
                                <p>Numer telefonu: {el.data.HospitalNumber}</p>
                                <p>Adress email: {el.data.HospitalEmail}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default SearchResultViewHospital