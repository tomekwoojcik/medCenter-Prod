import React from 'react'
import { UserAuth } from './context/AuthContext';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Page from './page';
const SearchResultViewHospital = () => {
    const { medHospital } = UserAuth()
    return (

        <div className="search_container">
            <Router>
                <Routes>
                    <Route path="searchNfzOw" element={<Page array={f} />} ></Route >
                    <Route path="searchCityInNfzOw" element={<RegistView />} ></Route>
                    <Route path="searchHospitalInCity" element={<UsersAccount />}></Route>
                </Routes>
            </Router>
        </div >
    )
}

export default SearchResultViewHospital



// {
//     medHospital.map((el) => {
//         return (
//             <div className='el_hospitalList' key={el.id}>
//                 <div className='state_nfz'>
//                     <p>Nazwa wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.NfzName}</span></p>
//                     <p className='second_item'>Numer wojewódzkiego odziału NFZ:  <span className="data_info">{el.data.NfzNumber}</span></p>
//                 </div>
//                 <div className='hospital_info'>
//                     <p>Nazwa szpitala: <span className="data_info">{el.data.HospitalName}</span></p>
//                     <p className='second_el'>Adres szpitala:  <span className="data_info">{`${el.data.HospiatalAdress}, ${el.data.City}`}</span></p>
//                 </div>
//                 <div className='hospital_contact'>
//                     <p>Numer telefonu:  <span className="data_info">{el.data.HospitalNumber}</span></p>
//                     <a href={el.data.HospitalEmail} className='second_el email'>Adress email:  <span className="data_info">{el.data.HospitalEmail}</span></a>
//                 </div>
//             </div>
//         )
//     })
// }