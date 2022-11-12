import React, { useContext, useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchState({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");

    const { state, handleButton } = UserAuth();
    console.log(state);
    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    state.map((el, i) => {
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