import React from 'react'

const ApiContext = () => {

    const requestOptions = {
        method: 'GET',
        body: formdata,
        redirect: 'follow'
    };

    fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return (
        <div>

        </div>
    )
}

export default ApiContext


