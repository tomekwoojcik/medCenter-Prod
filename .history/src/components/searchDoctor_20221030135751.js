import React, { useEffect, useState } from "react";
import ApiContext from "./context/ApiContext";



const Search = ({ place, arr }) => {

    const [hidden, setHidden] = useState("none");
    const [word, setWord] = useState(" ");
    const API = "http://api.airvisual.com/v2/states?country=Poland&key=9278fe1c-7d5b-4158-ac8e-7c0bb448055b";
    const [state, setState] = useState([]);
    useEffect(() => {
        const getApi = async () => {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("Not ok...");
            }

            const { results } = await response.json();
            console.log(results);
            setState(results);
        };
        setState().catch(handleError);
    }, []);

    if (!state.length) return <p>loading...</p>;


    return (
        <div className="search_Div">
            <input value={word} onKeyUp={() => { }} onChange={e => setWord(e.target.value)} onClick={() => { setHidden(prev => prev = "block") }} placeholder={place} className="search" type="text"></input>


            <ul style={{ display: hidden }} className="search_List">

                {/* {
                    dataArr.map((el, i) => {
                        return (<li className="list_Button" key={i} ><button>{el.state}</button></li>)
                    })
                } */}

                {state.map(({ el, i }) => {
                    return (<li><button key={i}>{el}</button></li>)
                })}

            </ul>

        </div>
    )

}


export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <Search place={"Wyszukaj województwo"} />
                </form>
            </div>
        </div >
    )
}