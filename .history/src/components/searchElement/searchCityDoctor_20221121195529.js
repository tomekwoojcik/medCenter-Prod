import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [word, setWord] = useState(" ");
    const { cities, handleCity, setHidden, hidden } = UserAuth();

    return (
        <div className="search_Div">
            <label>
                Wyszukaj miasto:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(true) }} placeholder={place} className="search" type="text"></input>
            </label>
            <ul onMouseLeave={setHidden(false)} className="search_List">
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