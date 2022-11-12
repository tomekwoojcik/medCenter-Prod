import React from 'react'

const ApiContext = () => {
    // const soapRequest = require('easy-soap-request');
    // const fs = require("fs");
    // const api = Api_Adres;

    // const loginUserApi = {
    //     user: Api_UserName,
    //     password: Api_Password
    // }

    fetch('http://eteryt.stat.gov.pl/eTeryt/rejestr_teryt/udostepnianie_danych/baza_teryt/uzytkownicy_indywidualni/pobieranie/pliki_pelne.aspx/db/struktura.csv').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.log(error) });
    return (
        <div>

        </div>
    )
}

export default ApiContext