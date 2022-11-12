import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { cities, arrHospitalCity } = UserAuth();

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    cities.map((el) => {
                        console.log(el);
                        return (<li className="list_Button" key={el.id}>
                            <button key={el.id} value={el.data.HospitalName}>{el.data.HospitalName}</button>
                        </li>)
                    })

                }

            </ul>

        </div>
    )

}