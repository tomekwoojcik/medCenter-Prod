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
                return (
                    <div key={el.id} className="med_person">
                        <div className="person_infomed">
                            <p className="title">Zawód: {el.data.title}</p>
                            <p className="name_surname">{`Imię i nazwisko:  ${el.data.name} ${el.data.surname}`}</p></div>
                        <p className="adress">{`Adres gabinetu: ${el.data.adress} ${el.data.city}`}</p>
                        <ul className="list_diseases">
                            <p>Lista leczonych chorób:</p>
                            {
                                el.data.diseases.map((el) => {
                                    return (<li className="list_el" key={el}>{el}</li>);
                                })
                            }
                        </ul>
                        <p className="phone_Number">Numer telefonu: <a>{el.data.phoneNumber}</a></p>
                        <p className="price_firstVisit">Cena za pierwszą wizytę: {el.data.priceFirstVisit}</p>
                        <p className="price_OtherVisit">Cena za kolejną wizytę: {el.data.priceOtherVisit}</p>
                        <div className="med_photo" />
                    </div>
                )
            })}
        </div>
    )
}