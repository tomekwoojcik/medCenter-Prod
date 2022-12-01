import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchState({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");

    const { states, handleButton } = UserAuth();

    return (
        <div className="search_Div">
            <label >Wyszukaj województwo:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            </label>

            <ul style={{ display: hidden }} className="search_List">
                {
                    states.map((el, i) => {
                        return (
                            <li className="list_Button" key={i} >
                                <button value={el.state} onClick={(e) => handleButton(e, 'value')}>{el.state}</button>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )

}