import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default function SearchResultView() {


    const [med, setMed] = useState([])

    const getMed = () => {
        const medCollection = collection(db, "PsychologCol");
        getDocs(medCollection)
            .then(response => {
                const meds = response.docs.map(doc => ({ data: doc.data(), id: doc.id }))
                setMed(meds)
            }).catch(error => { console.log(error.message) })
    }
    useEffect(() => { getMed() }, [])

    console.log(med)


    return (
        <div className="search_container">
            {med.map((el) => {
                console.log(el);
                return (
                    <div key={el.id} className="med_person">
                        <p className="name_surname">{el.name}</p>
                    </div>
                )
            })}
        </div>
    )
}