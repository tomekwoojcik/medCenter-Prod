import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchNFZ({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");

    const { lastNfzUniqeArr, handleCityButton } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj odział NFZ:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            </label>
            <ul style={{ display: hidden }} className="search_List">
                {
                    lastNfzUniqeArr.map((el) => {
                        return (<li className="list_Button" key={el}>
                            <button value={el} onClick={(e) => handleCityButton(e, 'value')}>{el}</button>
                        </li>)
                    })
                }
            </ul>

        </div>
    )

}