import React, { useRef, useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";

export default function RegistView() {

    const firstNameRef = useRef();
    const secondNameRef = useRef();
    const surnameRef = useRef();
    const peselRef = useRef();
    const loginRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()
    const [error, setError] = useState(" ");
    const [loading, setLoading] = useState(false);

    const { singup } = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
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
                <input className="input" type="text" ref={firstNameRef} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" type="text" ref={secondNameRef} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" ref={surnameRef} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" ref={peselRef} />
                <label className="label_register">Login:</label>
                <input className="input" type="text" ref={loginRef} />
                <label className="label_register">Hasło:</label>
                <input className="input" type="password" ref={passwordRef} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" ref={passwordConfirmRef} />
                <Button disabled={loading} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}