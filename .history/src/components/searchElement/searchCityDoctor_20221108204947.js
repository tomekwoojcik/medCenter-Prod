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
                        return (<li className="list_Button" key={el.city}>
                            <button key={el.city} value={el.city}>{el.city}</button>
                        </li>)
                    })


                }
            </ul>

        </div>
    )

}