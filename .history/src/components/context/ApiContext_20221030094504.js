import React from 'react'

const ApiContext = () => {
    const soapRequest = require('easy-soap-request');
    const fs = require("fs");
    const api = Api_Adres;

    const loginUserApi = {
        user: 
    }

    fetch('${api}/PobierzListeWojewodztw').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.log(error) });
    return (
        <div>

        </div>
    )
}

export default ApiContext