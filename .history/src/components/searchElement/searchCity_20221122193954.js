
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCity({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { uniqeArrCityHospital, handleHospitalInCityButton } = UserAuth();
    return (
        <div className="search_Div">
            <label className="label_input">
                Wskaż miasto:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} className="search" type="text"></input>
            </label>
            <ul style={{ display: hidden }} className="search_List">
                {
                    uniqeArrCityHospital.map((el, i) => {
                        return (
                            <li className="list_Button" key={i} >
                                <button value={el} onClick={(e) => handleHospitalInCityButton(e, 'value')}>{el}</button>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )

}