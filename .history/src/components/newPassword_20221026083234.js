import React, { useState } from "react";
import { Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { useAuth } from "./context/AuthContext";

export default function NewPassword() {

    const [user, setUser] = useState({ email: "", pasword: "" });
    const [error, setError] = useState();

    const { login } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        if (!user.email) return setError("Podaj nazwę uzytkownika");

    }
    return (
        <div className="login_container">
            <img className="img_login" alt="lekarz wypisujący skierowanie" src="https://www.wroclaw.pl/beta2/files/news/153034/main/lekarz-skierowanie.jpg"></img>
            <form onSubmit={handleSubmit} className="form">
                <h3 className="form_title">Przypomnij hasło:</h3>
                <label className="label">Email uzytkownika:</label>
                <input className="login_Input" onChange={handleChange} type="email" />
                <Button type="submit" className="button" variant="outlined">Zaloguj</Button>
                <Button href="/loginView" type="submit" className="button" variant="outlined">Strona logowania</Button>
                {error && <div className="error" >{error}</div>}
            </form>
        </div>
    )
}