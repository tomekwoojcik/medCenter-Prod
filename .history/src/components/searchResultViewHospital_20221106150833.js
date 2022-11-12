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
                        <div key={el.id} className="med_person">
                            {console.log(el)};
                        </div>
                    )
                })
            }
        </div >
    )
}

export default SearchResultViewHospital