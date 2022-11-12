
export function SearchElements({ city, handleCityButton }) {

    console.log(city);
    return (

        {
            city.map((el, i) => {
                return (
                    <li className="list_Button" key={i} >
                        <button value={el.city} onClick={(e) => handleCityButton(e, 'value')}>{el.city}</button>
                    </li>
                )
            })
        }


    )

}



import React, { useEffect, useState } from "react";
import { UserAuth } from "../context/AuthContext";
export function SearchCity({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const { handleCityButton, city } = UserAuth();

    console.log(city);
    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    // city && city.map((el, i) => {
                    //     return (
                    //         <li className="list_Button" key={i} >
                    //             <button value={el.city} onClick={(e) => handleCityButton(e, 'value')}>{el.city}</button>
                    //         </li>
                    //     )
                    // })

                    city && <SearchElements city={city} handleCityButton={handleCityButton} />
                }

            </ul>

        </div>
    )

}