import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export default function SearchResultView() {


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
        <div className="search_container">
            {medPerson.map((el) => {
                console.log(el.data.name);
                return (
                    <div key={el.id} className="med_person">
                        <p className="name_surname">{`Imię i nazwisko: ${el.data.name} ${el.data.surname}`}</p>
                        <p className="adress">{`Adres gabinetu: ${el.data.adress} ${el.data.city}`}</p>


                    </div>
                )
            })}
        </div>
    )
}