
import React from "react";
import ApiContext from "./context/ApiContext";

export default function SearchHospitalView() {
    // const wojArr = [
    //     "Dolnośląskie",
    //     "Kujawsko-pomorskie",
    //     "Lubelskie",
    //     "Lubuskie",
    //     "Łódzkie",
    //     "Małopolskie",
    //     "Mazowieckie",
    //     "Opolskie",
    //     "Podkarpackie",
    //     "Podlaskie ",
    //     "Pomorskie",
    //     "Śląskie",
    //     "Świętokrzyskie",
    //     "Warmińsko-mazurskie",
    //     "Wielkopolskie",
    //     "Zachodniopomorskie"
    // ];
    // // const input = document.querySelector(".search_Place");

    return (
        <div className="login_container">
            <div className="searchDiv">
                <ApiContext></ApiContext>
                <form>
                    <input className="input_Search" placeholder="Podaj nazwę placówki" type="text" />
                </form>
            </div>
        </div >
    )
}

