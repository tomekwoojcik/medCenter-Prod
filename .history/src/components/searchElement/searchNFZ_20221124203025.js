import React from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchNFZ({ place }) {
    const { lastNfzUniqeArr, handleCityButton, hiddenSec, setHiddenSec, wordOne, setWordOne, sea } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wyszukaj odział NFZ:
                <input value={wordOne} onChange={e => setWordOne(e.target.value)} onClick={() => { setHiddenSec(true) }} placeholder={place} className="search" type="text"></input>
            </label>
            {hiddenSec ? <ul onKeyUp={search} onMouseLeave={() => { setHiddenSec(false) }} className="search_List">
                {
                    lastNfzUniqeArr.map((el) => {
                        return (<li className="list_Button" key={el}>
                            <button value={el} onClick={(e) => handleCityButton(e, 'value')}>{el}</button>
                        </li>)
                    })
                }
            </ul> : null}

        </div>
    )

}