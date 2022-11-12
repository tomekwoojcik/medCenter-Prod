import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function List() {

    const [medPerson, setMedPerson] = useState([])

    const getMed = () => {
        const medCollection = collection(db, "PsychologCol");
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setMedPerson(meds)
            }).catch(error => { console.log(error.message) })
    }
    useEffect(() => { getMed() }, [])
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
