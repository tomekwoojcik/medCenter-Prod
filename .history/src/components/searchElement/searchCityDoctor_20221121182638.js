import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { cities, handleCity } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj miasto:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            </label>
            <ul style={{ display: hidden }} className="search_List">
                {
                    cities.map((el) => {
                        return (<li className="list_Button" key={el.city}>
                            <button key={el.city} value={el.city} onClick={(e) => handleCity(e, 'value')}>{el.city}</button>
                        </li>)
                    })


                }
            </ul>

        </div>
    )

}