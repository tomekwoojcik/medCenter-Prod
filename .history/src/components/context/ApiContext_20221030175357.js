// import React, { useState } from 'react'

// const ApiContext = () => {
//     let dataArr = [];
//     fetch("http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b")
//         .then(response => response.json())
//         .then(result => dataArr.push(result.data))
//         .catch(error => console.log('error', error));


//     return (
//         <ul>
//             {dataArr.map((el, i) => {
//                 return (<li key={i}>{el}</li>)
//             })}
//         </ul>
//     )
// }

// export default ApiContext
