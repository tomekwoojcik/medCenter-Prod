import React, { useState } from 'react'

const ApiContext = () => {
    const [wojArr, setWojArr] = useState()

    let woj = null;
    fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
        .then(response => response.json())
        .then(result => woj = result)
        .catch(error => console.log('error', error));

    return (
        <div>

        </div>
    )
}

export default ApiContext


