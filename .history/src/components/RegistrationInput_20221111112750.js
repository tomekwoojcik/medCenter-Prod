import React, { useState } from "react";

const RegistrationInput = () => {
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
            <form>
                <input value={inputDate} onChange={handleDate} format="yyyy-mm-dd" type="date" />
                <input value={inputTime} onChange={handleTime} type="time" />
            </form>
        </div >
    )
}

export default RegistrationInput