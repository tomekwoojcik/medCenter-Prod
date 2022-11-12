import React from 'react'

const ApiContext = () => {

    const api = Api_Adres;

    fetch('${api}/PobierzListeWojewodztw').then(response => response.json()).then(data => { console.log(data); }).catch(error => { console.log(error) });
    return (
        <div>

        </div>
    )
}

export default ApiContext