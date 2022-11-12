import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchNFZ({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");

    const { medHospital } = UserAuth();

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    medHospital.map((el) => {

                    })
                }
            </ul>

        </div>
    )

}