
import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchHospitalInCity() {

    const [word, setWord] = useState(" ");
    const { arrHospitalCity, selectHospital, setHiddenThr, hiddenThr } = UserAuth();

    return (
        <div className="search_Div">
            <label className="label_input">
                Wskaż szpital:
                <input value={word} onChange={e => setWord(e.target.value)} onClick={() => { setHiddenThr(true) }} className="search" type="text"></input>
            </label>
            {hiddenThr ? <ul onMouseLeave={() => { setHiddenThr(false) }} className="search_List">
                {
                    arrHospitalCity.map((el) => {
                        return (<li className="list_Button" key={el.id}>
                            <button key={el.id} value={el.data.HospitalName} onClick={(e) => selectHospital(e, 'value')} > {el.data.HospitalName}</button>
                        </li>)
                    })

                }

            </ul> : null}

        </div >
    )

}