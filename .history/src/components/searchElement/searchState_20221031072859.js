import React, { useEffect, useState } from "react";
export function SearchState({ place, arr }) {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const apiUrl = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

    const [state, setState] = useState([])

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json()
                .then(state => { setState(state.data) })
                .catch((error) => console.log(error))
            )
    }, []);

    const setData = (el) => {
        console.log(el)
    }

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
            <ul style={{ display: hidden }} className="search_List">
                {
                    state.map((el, i) => {
                        return (<li className="list_Button" key={i} ><button value={el} onClick={(el) => {
                            let liItem = args.target.closest('li');
                            console.log(liItem);
                        }}>{el.state}</button></li>)
                    })
                }

            </ul>

        </div>
    )

}