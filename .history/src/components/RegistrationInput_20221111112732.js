import React, { useState } from "react";

const RegistrationInput = () => {
    const [inputDate, setInputDate] = useState("");
    const [inputTime, setInputTime] = useState("");
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