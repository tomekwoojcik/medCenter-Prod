import React from 'react'
import { UserAuth } from './context/AuthContext';
import { Button } from '@mui/material';

const SearchResultViewHospital = () => {
    const { dataConnect, user } = UserAuth()
    return (

        <div className="search_container">
            {
                dataConnect.map((el) => {
                    return (
                        <div className='el_hospitalList' key={el.id}>
                            <div className='state_nfz'>
                                <p>Nazwa wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.NfzName}</span></p>
                                <p className='second_item'>Numer wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.NfzNumber}</span></p>
                            </div>
                            <div className='hospital_info'>
                                <p>Nazwa szpitala: <span className="data_info">{el.data.HospitalName}</span></p>
                                <p className='second_el'>Adres szpitala:  <span className="data_info">{`${el.data.HospiatalAdress}, ${el.data.City}`}</span></p>
                            </div>
                            <div className='hospital_contact'>
                                <p>Numer telefonu:  <span className="data_info">{el.data.HospitalNumber}</span></p>
                                <a href={el.data.HospitalEmail} className='second_el email'>Adress email:  <span className="data_info">{el.data.HospitalEmail}</span></a>
                            </div>
                            <span className="line" >
                                {user !== null ? <Button onClick={handleLogout} className="button" color="primary" variant="contained">Wyloguj</Button> : <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>}
                            </span>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default SearchResultViewHospital