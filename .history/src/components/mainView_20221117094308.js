import React from "react";
import { Outlet } from "react-router-dom";
export default function MainView() {


    return (
        <div className="login_container">
            <div className="in_div">
                <div className="main_img" />
                <article className="main_article">
                    <h3> <span>MedCenter+</span> to nowoczesny interfejs do zarządzania twoim zdrowiem.</h3>
                    <p>Za sprawą aplikacji mozesz tutaj:</p>
                    <ul>
                        <li>Znaleźć najlepszych specjalistów.</li>
                        <li>Znaleźć renomowane jednostki zdrowia.</li>
                        <li>Stworzyć nowe konto pacjęta.</li>
                        <li>Zarządzać swoimi wizytami.</li>
                        <li>Znaleźć swoją historię choroby.</li>
                    </ul>
                </article>

            </div>
        </div>
    )
}