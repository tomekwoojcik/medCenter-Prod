import { Button } from "@mui/material";
import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";

const RegistrationInput = () => {

    const { book, nullToEndRegistration } = UserAuth();
    let person = [];
    nullToEndRegistration.map((first => {
        person = medPerson.filter(second => {
            return second.id.includes(book);
        })
    }))

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
            <div className="input_registration">

                <form>
                    <input value={inputDate} onChange={handleDate} format="yyyy-mm-dd" type="date" />
                    <input value={inputTime} onChange={handleTime} type="time" />
                    <Button>Wyślij rezerwację</Button>
                </form>
            </div>
        </div >
    )
}

export default RegistrationInput