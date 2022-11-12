import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";

export default function RegistView() {

    const [name, setName] = useState(" ");
    const [secondName, setSecondName] = useState(" ");
    const [lastname, setLastName] = useState(" ");
    const [pesel, setPesel] = useState(" ");
    const [login, setLogin] = useState(" ");
    const [pasword, setPasword] = useState(" ");
    const [confirmPasword, setConfirmPasword] = useState(" ");

    const [error, setError] = useState(" ");
    const [loading, setLoading] = useState(false);

    const { singup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        if (pasword !== confirmPasword) {
            return setError('Paswords do not match');
        }
        try {
            setError(" ");
            setLoading(true);
            await singup(firstNameRef.current.value, secondNameRef.current.value, surnameRef.current.value, peselRef.current.value, loginRef.current.value, passwordRef.current.value)
        }
        catch {
            setError("Failed to create an account");
        }
        setLoading(false);

    }

    return (
        <div className="login_container">
            {error && <div className="error" >{error}</div>}
            <form onSubmit={handleSubmit} className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" type="text" onChange={(e) => { setName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" type="text" onChange={(e) => { setSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Login:</label>
                <input className="input" type="text" onChange={(e) => { setLogin(e.target.value) }} />
                <label className="label_register">Hasło:</label>
                <input className="input" type="password" />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" />
                <Button disabled={loading} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}