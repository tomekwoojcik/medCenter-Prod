import React, { useState } from "react";
import PersonIcon from '@mui/icons-material/Person';
import { Button } from "@mui/material";
import ListDiseases from "./listDiseases";
import BlindListDiseases from "./blindListDiseases";
import { UserAuth } from "./context/AuthContext";

export default function SearchResultView() {

    const [contextList, setContextList] = useState(false);

    const { medPerson } = UserAuth();

    function viewContext() {
        setContextList(true)
    }

    function hiddenContext() {
        setContextList(false)
    }
    console.log(contextList);
    return (
        <div className="search_container">
            {medPerson.map((el) => {
                return (
                    <div key={el.id} className="med_person">
                        <div className="inner">
                            <div className="person_infomed">
                                <p className="title">Specjalizacja: <span className="data_info">{el.data.title}</span></p>
                                <p className="name_surname">Imię i nazwisko:  <span className="data_info">{`${el.data.name} ${el.data.surname}`}</span></p>

                            </div>
                            <div className="place">
                                <p className="adress">Adres gabinetu: <span className="data_info">{`${el.data.adress}, ${el.data.city}`}</span></p>
                                <p className="phone_Number">Numer telefonu: <span className="data_info">{el.data.phoneNumber}</span></p>
                            </div>
                            <div className="other_info">
                                <p className="list">Lista leczonych chorób:</p>
                                <ul className="list_diseases">

                                    {
                                        el.data.diseases.map((el) => {
                                            return (<li className="list_el" key={el}><span className="data_info">{el}</span></li>);
                                        })
                                    }
                                </ul>
                                <div className="price">
                                    <p className="price_firstVisit">Cena za pierwszą wizytę: <span className="data_info">{el.data.priceFirstVisit}</span></p>
                                    <p className="price_OtherVisit">Cena za kolejną wizytę: <span className="data_info">{el.data.priceOtherVisit}</span></p>
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