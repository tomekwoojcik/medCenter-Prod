import React, { useEffect, useState } from "react";
import ApiContext from "./context/ApiContext";

const handleError = (err) => {
    console.log("Oops...");
    console.error(err);
};

const Search = ({ place, arr }) => {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const API = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";

    let state;
    fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
        .then(response => response.json())
        .then(result => result.forEach(element => {
            console.log(element);
        }))
        .catch(error => console.log('error', error));

    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>


            <ul style={{ display: hidden }} className="search_List">

                {/* {
                    dataArr.map((el, i) => {
                        return (<li className="list_Button" key={i} ><button>{el.state}</button></li>)
                    })
                } */}

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