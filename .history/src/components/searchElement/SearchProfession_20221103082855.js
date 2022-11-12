
import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchProfession({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { dataMed } = UserAuth();

    console.log(city);
    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    dataMed.map((el) => {
                        return (
                            <li className="list_Button" key={el.id} >
                                <button value={el.specjalizacja} onClick={(e) => handleCityButton(e, 'value')}>{el.specjalizacja}</button>
                            </li>
                        )
                    })

                }

            </ul>

        </div>
    )

}