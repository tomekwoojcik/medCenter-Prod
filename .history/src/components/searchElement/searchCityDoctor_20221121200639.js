import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [word, setWord] = useState(" ");
    const { cities, handleCity, setHidden, hidden } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj miasto:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(true) }} placeholder={place} className="search" type="text"></input>
            </label>

            {useEffect(() => {
                hidden ? <ul onMouseLeave={setHidden(false)} className="search_List">
                    {
                        cities.map((el) => {
                            return (<li className="list_Button" key={el.city}>
                                <button key={el.city} value={el.city} onClick={(e) => handleCity(e, 'value')}>{el.city}</button>
                            </li>)
                        })


                    }
                </ul> : null
            }, [])}

        </div>
    )

}