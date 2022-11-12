import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { UserAuth } from "./context/AuthContext";
import { Button } from '@mui/material';

export default function SearchResultView() {
    const { medPerson, user, handleLogout } = UserAuth();

    return (
        <div className="search_container">
            {medPerson.map((el) => {
                return (
                    <div key={el.id} className="med_person">
                        <div className="inner">
                            <div className="person_infomed">
                                <p className="title">Specjalizacja: <span className="data_info">{`${el.data.title} ${el.data.medicalSpecialization}`}</span></p>
                                <p className="name_surname">Imię i nazwisko:  <span className="data_info">{`${el.data.name} ${el.data.surname}`}</span></p>

                            </div>
                            <div className="place">
                                <p className="adress">Adres gabinetu: <span className="data_info">{`${el.data.adress}, ${el.data.city}`}</span></p>
                                <p className="phone_Number">Numer telefonu: <span className="data_info">{el.data.phoneNumber}</span></p>
                            </div>
                            <div className="other_info">
                                <ul className="list_diseases">
                                    <p className="list">Lista leczonych chorób:</p>

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
                            <div className="s" >
                                {user !== null ? <Button onClick={handleLogout} className="button" color="primary" variant="contained">Wyloguj</Button> : <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>}
                            </div>
                        </div>
                        <PersonIcon className="person" />
                    </div>
                )
            })}
        </div>
    )
}