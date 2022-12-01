
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchProfession({ place }) {

    // const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { handleProfesion, uniqeProfessionMed, setHidden, hidden } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj specjalizacje:
                <input value={word} onChange={e => setWord(e.target.value)} onDoubleClick={() => { setHidden(prev => prev = hidden) }} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>

            </label>
            <ul style={{ display: hidden }} className="search_List">
                {
                    uniqeProfessionMed.map((el) => {
                        return (
                            <li className="list_Button" key={el} >
                                <button value={el} onClick={(e) => handleProfesion(e, 'value')}>{el}</button>
                            </li>
                        )
                    })

                }

            </ul>

        </div>
    )

}