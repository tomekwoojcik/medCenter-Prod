import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCityDoctor({ place }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { cities, arrHospitalCity } = UserAuth();

    console.log(cities);
    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    cities.list.map((el) => {
                        return (el.data.map((ele) => {
                            return (<li className="list_Button" key={ele.city}>
                                <button key={ele.city} value={ele.city}>{ele.city}</button>
                            </li>)
                        })

                        )
                    })

                }

            </ul>

        </div>
    )

}