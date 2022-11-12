import React, { useState } from 'react'

const ApiContext = () => {

    const [state, setState] = useState([]);

    // fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
    //     .then(response => response.json())
    //     .then(result => state = result.data)
    //     .catch(error => console.log('error', error));

    const handleData = () => {
        setState(() => {
            state = fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
                .then(response => response.json())
                .then(result => state = result.data)
                .catch(error => console.log('error', error));
        });
    }

    return (
        <div>
            <button onClick={handleData}>Data</button>
        </div>
    )
}

export default ApiContext


