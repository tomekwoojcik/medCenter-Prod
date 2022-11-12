import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function ListDiseases() {

    const { medPerson } = UserAuth();


    return (
        <>
            {medPerson.map((el) => {
                return (
                    <ul className="list_diseases">

                        {
                            el.data.diseases.map((el) => {
                                return (<li className="list_el" key={el}><span className="data_info">{el}</span></li>);
                            })
                        }
                    </ul>)
            })}
        </>

    )

}
