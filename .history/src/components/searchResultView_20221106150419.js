import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { UserAuth } from "./context/AuthContext";

export default function SearchResultView() {
    const { medPerson } = UserAuth();

    return (
        <div className="search_container">
            {medPerson.map((el) => {
                return (
                    <div key={el.id} className="med_person">
                        <div className="inner">
                            <div className="person_infomed">
                                <p className="title">Specjalizacja: <span className="data_info">{el.data.Krótka nazwa Oddziału NFZ}</span></p>
                                <p className="name_surname">Imię i nazwisko:  <span className="data_info">{`${el.data} ${el.data}`}</span></p>

                            </div>
                            <div className="place">
                                <p className="adress">Adres gabinetu: <span className="data_info">{`${el.data}, ${el.data}`}</span></p>
                                <p className="phone_Number">Numer telefonu: <span className="data_info">{el.data}</span></p>
                            </div>
                            <div className="other_info">
                                <div className="price">
                                    <p className="price_firstVisit">Cena za pierwszą wizytę: <span className="data_info">{el.data}</span></p>
                                    <p className="price_OtherVisit">Cena za kolejną wizytę: <span className="data_info">{el.data}</span></p>
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