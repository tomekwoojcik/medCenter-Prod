import React, { useEffect, useState } from "react";
export function SearchCity({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const apiUrl = `http://api.airvisual.com/v2/cities?state=${state}&Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b`;

    const [city, setCity] = useState([])
    const [checkCity, setCheckCity] = useState("");

    const state = "mazovia";
    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(city => { setCity(city.data) })
                .catch((error) => console.log(error))
            )
    }, []);




    const handleButton = (el) => {
        el.preventDefault();
        setCheckCity(el.target.value)
    }

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    city.map((el, i) => {
                        return (
                            <li className="list_Button" key={i} >
                                <button value={el.city} onClick={(e) => handleButton(e, 'value')}>{el.city}</button>
                            </li>
                        )
                    })
                }

            </ul>

        </div>
    )

}