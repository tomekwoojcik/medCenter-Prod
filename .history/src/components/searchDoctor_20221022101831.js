import React, { useEffect, useState } from "react";
const Search = ({ place, arr }) => {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");



    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>

            <ul style={{ display: hidden }} className="search_List">

                {
                    arr.map((el, i) => {
                        return (<li className="list_Button" key={i} ><button>{el}</button></li>)
                    })
                }

            </ul>

        </div>
    )

}


export default function SearchDoctorView() {
    const wojArr = [
        "Dolnośląskie",
        "Kujawsko-pomorskie",
        "Lubelskie",
        "Lubuskie",
        "Łódzkie",
        "Małopolskie",
        "Mazowieckie",
        "Opolskie",
        "Podkarpackie",
        "Podlaskie ",
        "Pomorskie",
        "Śląskie",
        "Świętokrzyskie",
        "Warmińsko-mazurskie",
        "Wielkopolskie",
        "Zachodniopomorskie"
    ];
    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <Search place={"Wyszukaj województwo"} arr={wojArr} />
                </form>
            </div>
        </div >
    )
}