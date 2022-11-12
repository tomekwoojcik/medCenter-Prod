import React, { useState } from 'react'

const ApiContext = () => {

    const [state, setState] = useState([]);

    fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
        .then(response => response.json())
        .then(result => state = result)
        .catch(error => console.log('error', error));


    setState(() => { console.log(state) });
    return (
        <div>
        </div>
    )
}

export default ApiContext


