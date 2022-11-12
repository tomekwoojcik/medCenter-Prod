import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import PersonIcon from '@mui/icons-material/Person';
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
                        <div className="inner">
                            <div className="person_infomed">
                                <p className="title">Specjalizacja: <span className="data_info">{el.data.title}</span></p>
                                <p className="name_surname">{`Imię i nazwisko:  ${el.data.name} ${el.data.surname}`}</p>
                                <p className="phone_Number">Numer telefonu: {el.data.phoneNumber}</p>

                            </div>
                            <div className="place">
                                <p className="adress">{`Adres gabinetu: ${el.data.adress} ${el.data.city}`}</p>
                            </div>
                            <Button variant="text">Lista leczonych chorób:</Button>
                            <div className="other_info">

                                <ul className="list_diseases">

                                    {
                                        el.data.diseases.map((el) => {
                                            return (<li className="list_el" key={el}>{el}</li>);
                                        })
                                    }
                                </ul>
                                <div className="price">
                                    <p className="price_firstVisit">Cena za pierwszą wizytę: {el.data.priceFirstVisit}</p>
                                    <p className="price_OtherVisit">Cena za kolejną wizytę: {el.data.priceOtherVisit}</p>
                                </div>
                            </div>
                        </div>
                        <PersonIcon className="person" />
                    </div>
                )
            })}
        </div>
    )
}