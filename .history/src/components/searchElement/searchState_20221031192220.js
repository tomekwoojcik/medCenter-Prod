import React, { useContext, useEffect, useState } from "react";
import ApiProvider from "../context/ApiContext";
export function SearchState({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

    const [checkState, setCheckState] = useState("");
    const { state } = useContext(ApiProvider)


    // useEffect(() => {
    //     fetch(apiUrl)
    //         .then(response => response.json()
    //             .then(state => { setState(state.data) })
    //             .catch((error) => console.log(error))
    //         )
    // }, []);

    const handleButton = (el) => {
        el.preventDefault();
        setCheckState(el.target.value)
    }
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