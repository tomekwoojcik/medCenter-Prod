import React, { useEffect, useState } from "react";
import ApiContext from "./context/ApiContext";

const Search = ({ place, arr }) => {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const API = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

§
fetch(API)
    .then(response => response.json())
    .then(result => result.data.map((el) => {
        stateArr.push(el.state);
    }))
    .catch(error => console.log('error', error));

return (
    <div className="search_Div">
        <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>
        <ul style={{ display: hidden }} className="search_List">
            {
                stateArr.map((el, i) => {
                    return (<li className="list_Button" key={i} ><button>{el}</button></li>)
                })
            }

        </ul>

    </div>
)

}


export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <Search place={"Wyszukaj województwo"} />
                </form>
            </div>
        </div >
    )
}