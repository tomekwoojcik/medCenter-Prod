import React, { useState } from "react";
import { Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { useAuth } from "./context/AuthContext";

export default function LoginView() {

    const [user, setUser] = useState({ email: "", pasword: "" });
    const [error, setError] = useState();
    console.log(user);
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        e.preventDefault();
        try {
            await login(user.email, user.pasword);
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
            <form onSubmit={handleSubmit} className="form">
                <h3 className="form_title">Zaloguj się:</h3>
                <label className="label">Email uzytkownika:</label>
                <input className="login_Input" onChange={handleChange} type="email" />
                <label className="label">Hasło uzytkownika:</label>
                <input className="password_Input" onChange={handleChange} type="password" />
                <Button type="submit" className="button" variant="outlined">{if()}</Button>
                <p>Nieposiadasz konta? <a href="/registView" className="button_regist">Zarejestruj się...</a></p>
                {error && <div className="error" >{error}</div>}
            </form>
        </div>
    )
}