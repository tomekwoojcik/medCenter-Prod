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
                            <div className='state_nfz'>
                                <p>Nazwa wojewódzkiego odziału NFZ: {el.data.nazwaOddziałuNFZ}</p>
                                <p className='second_item'>Numer wojewódzkiego odziału NFZ: {el.data.nrOdziałuNFZ}</p>
                            </div>
                            <div className='hospital_info'>
                                <p>Nazwa szpitala: {el.data.HospitalName}</p>
                                <p>Adress szpitala: {`${el.data.AdresSzpitalu}, ${el.data.City}`}</p>
                            </div>
                            <div className='hospital_contact'>
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