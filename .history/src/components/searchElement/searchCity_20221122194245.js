
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCity({ place }) {

    const [word, setWord] = useState(" ");
    const { uniqeArrCityHospital, handleHospitalInCityButton, hidden, setHidden } = UserAuth();
    return (
        <div className="search_Div">
            <label className="label_input">
                Wskaż miasto:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(true) }} className="search" type="text"></input>
            </label>
            {hidden ? <ul onMouseLeave={() => { setHidden(false) }} className="search_List">
                {
                    uniqeArrCityHospital.map((el, i) => {
                        return (
                            <li className="list_Button" key={i} >
                                <button value={el} onClick={(e) => handleHospitalInCityButton(e, 'value')}>{el}</button>
                            </li>
                        )
                    })
                }

            </ul> : null}

        </div>
    )

}