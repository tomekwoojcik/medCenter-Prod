
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchProfession({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { dataMed, handleProfesion, uniqeProfessionMed } = UserAuth();

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
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