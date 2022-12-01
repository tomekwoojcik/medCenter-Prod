import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchState({ place }) {

    const [word, setWord] = useState(" ");

    const { states, handleButton, hiddenThr, setHiddenThr } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj województwo:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHiddenThr(true) }} placeholder={place} className="search" type="text"></input>
            </label>

            <ul onMouseLeave={() => { setHiddenThr(false) }} className="search_List">
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