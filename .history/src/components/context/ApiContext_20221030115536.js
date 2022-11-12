import React, { useState } from 'react'

const ApiContext = () => {
    const [wojArr, setWojArr] = useState()

    fetch("http://api.airvisual.com/v2/states?country=Poland&key={{Api_key}")
        .then(response => response.json())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

    return (
        <div>

        </div>
    )
}

export default ApiContext


