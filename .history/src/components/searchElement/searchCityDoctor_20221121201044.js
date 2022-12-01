import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [word, setWord] = useState(" ");
    const { cities, handleCity, hiddenSec, setHiddenSec } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj miasto:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHiddenSec(true) }} placeholder={place} className="search" type="text"></input>
            </label>

            {
                hiddenSec ? <ul onMouseLeave={setHiddenSec(false)} className="search_List">
                    {
                        cities.map((el) => {
                            return (<li className="list_Button" key={el.city}>
                                <button key={el.city} value={el.city} onClick={(e) => handleCity(e, 'value')}>{el.city}</button>
                            </li>)
                        })


                    }
                </ul> : null}

        </div>
    )

}