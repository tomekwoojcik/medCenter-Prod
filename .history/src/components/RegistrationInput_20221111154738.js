import { Button } from "@mui/material";
import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";

const RegistrationInput = () => {

    const { book, nullToEndRegistration, medPerson } = UserAuth();
    let filterArr = [];


    let arr = nullToEndRegistration.filter((el) => {

        return el.id.includes(book);
    })
    arr.map((first) => {
        filterArr = medPerson.filter((el) => { return el.id.includes(first.data.doctorId) })

    })

    console.log(filterArr)
    const [inputDate, setInputDate] = useState("");
    const [inputTime, setInputTime] = useState("");

    const handleDate = (e) => {
        setInputDate(e.target.value)
    }

    const handleTime = (e) => {
        setInputTime(e.target.value)
    }
    return (
        <div className="login_container">
            {filterArr.map((el) => {
                return (
                    <div key={el.id} className="input_registration">

                        <p>Kończysz rejestrację do: {`${el.data.title}a ${el.data.medicalSpecialization}a ${el.data.name}  ${el.data.surname}`}</p>
                        <p>Miejsce wizyty: {`${el.data.adress}, ${el.data.city}`}</p>
                        <form>
                            <label>
                                Podaj datę wizyty:
                                <input value={inputDate} onChange={handleDate} format="yyyy-mm-dd" type="date" />
                            </label>
                            <input value={inputTime} onChange={handleTime} type="time" />
                            <Button>Wyślij rezerwację</Button>
                        </form>
                    </div>)
            }
            )}

        </div >
    )
}

export default RegistrationInput