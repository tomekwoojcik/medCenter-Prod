
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchHospitalInCity({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { arrHospitalCity, selectHospital } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wskaż szpital:
                <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            </label>
            <ul style={{ display: hidden }} className="search_List">
                {
                    arrHospitalCity.map((el) => {
                        return (<li className="list_Button" key={el.id}>
                            <button key={el.id} value={el.data.HospitalName} onClick={(e) => selectHospital(e, 'value')} > {el.data.HospitalName}</button>
                        </li>)
                    })

                }

            </ul>

        </div >
    )

}