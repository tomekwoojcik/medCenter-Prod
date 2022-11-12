import React from 'react'
import { UserAuth } from './context/AuthContext';

const SearchResultViewHospital = () => {
    const { medHospital } = UserAuth()
    return (

        <div className="search_container">
            {
                medHospital.map((el) => {
                    return (
                        <div className='el_hospitalList' key={el.id}>
                            <div className='state_nfz'>
                                <p>Nazwa wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.nazwaOddziałuNFZ}</span></p>
                                <p className='second_item'>Numer wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.nrOdziałuNFZ}</span></p>
                            </div>
                            <div className='hospital_info'>
                                <p>Nazwa szpitala: <span className="data_info">{el.data.HospitalName}</span></p>
                                <p className='second_el'>Adress szpitala:  <span className="data_info">{`${el.data.AdresSzpitalu}, ${el.data.City}`}</span></p>
                            </div>
                            <div className='hospital_contact'>
                                <p>Numer telefonu:  <span className="data_info">{el.data.HospitalNumber}</span></p>
                                <a href={el.data.HospitalEmail} className='second_el email'>Adress email:  <span className="data_info">{el.data.HospitalEmail}</span></a>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default SearchResultViewHospital