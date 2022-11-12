
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCity({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { handleCityButton, cities } = UserAuth();

    console.log(cities);
    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    cities.map((el, i) => {
                        return (
                            <li className="list_Button" key={i} >
                                <button value={el.cities} onClick={(e) => handleCityButton(e, 'value')}>{el.cities}</button>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )

}