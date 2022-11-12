import React from 'react'
import { UserAuth } from './context/AuthContext';
import PersonIcon from '@mui/icons-material/Person';


const SearchResultViewHospital = () => {
    const { medHospital } = UserAuth
    console.log(medHospital);
    return (

        <div className="search_container">

        </div >
    )
}

export default SearchResultViewHospital