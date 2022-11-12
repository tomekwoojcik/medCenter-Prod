
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchHospitalInCity({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { } = UserAuth();

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    lastNfzUniqeArr.map((el) => {
                        return (<li className="list_Button" key={el}>
                            <button value={el} onClick={(e) => handleCityButton(e, 'value')}>{el}</button>
                        </li>)
                    })

                }

            </ul>

        </div>
    )

}