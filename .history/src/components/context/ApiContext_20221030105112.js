import React from 'react'

const ApiContext = () => {
    // const soapRequest = require('easy-soap-request');
    // const fs = require("fs");
    // const api = Api_Adres;

    // const loginUserApi = {
    //     user: Api_UserName,
    //     password: Api_Password
    // }

    // fetch('https://www.dane.gov.pl/dataset/726/resource/7218').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.log(error) });
    fetch('http://api.airvisual.com/v2/countries?key={{YOUR_API_KEY}}')
        .then(response => response.json())
        .then(data => { console.log(data); })
        .catch(error => { console.log(error) });
    return (
        <div>

        </div>
    )
}

export default ApiContext