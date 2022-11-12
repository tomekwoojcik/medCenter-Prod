import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

export default function LoginView() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState();

    const { signIn } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        e.preventDefault();
        const isValid = formValidation();
        try {
            await signIn(email, password);
            navigate("/");


        } catch (error) {
            setError(error.message)
            //błedy wyświetlane w formularzu wyświetlamy tutaj w formie

            // if(error.code === ''){
            //     setError("text errora")
            // }
        }
    }
    return (
        <div className="login_container">
            <img className="img_login" alt="lekarz wypisujący skierowanie" src="https://www.wroclaw.pl/beta2/files/news/153034/main/lekarz-skierowanie.jpg"></img>
            <form className="form" onSubmit={handleSubmit}>
                <h3 className="form_title">Zaloguj się:</h3>
                <label className="label">Email uzytkownika:</label>
                <input className="login_Input" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label">Hasło uzytkownika:</label>
                <input className="password_Input" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Button type="submit" className="button" variant="outlined">Zaloguj</Button>
                <p>Nieposiadasz konta? <a href="/registView" className="button_regist">Zarejestruj się...</a></p>
                {error && <div className="error" >{error}</div>}
            </form>
        </div>
    )
}