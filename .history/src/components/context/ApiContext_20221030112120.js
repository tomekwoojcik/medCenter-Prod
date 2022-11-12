import React from 'react'

const ApiContext = () => {

    fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error));

    return (
        <div>

        </div>
    )
}

export default ApiContext


