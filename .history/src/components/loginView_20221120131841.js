import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

export default function LoginView() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailErr, setEmailErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});


    const [error, setError] = useState();

    const { signIn } = UserAuth();
    const navigate = useNavigate();


    const formValidation = () => {
        const emailErr = {};
        const passwordErr = {};


        let isValid = true;

        if (!email.includes("@") || email === "") {
            emailErr.emailNotIncludes = "Email must includes @";
            isValid = false;
        }


        if (password.trim().length < 3 || password.trim().length > 15 || password === "") {
            passwordErr.passwordIsToShortOrToLong = "Password is to short or to long, check your password.";
            isValid = false;
        }


        setEmailErr(emailErr);
        setPasswordErr(passwordErr);
        return isValid

    }

    const handleSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {
            setEmailErr("");
            setPasswordErr("");

            try {
                await signIn(email, password);
                navigate("main");


            } catch (error) {
                setError(error.message)
                //błedy wyświetlane w formularzu wyświetlamy tutaj w formie

                // if(error.code === ''){
                //     setError("text errora")
                // }
                if (error.code === 'auth/invalid-email') {
                    setError("Podany email jest nieprawidłowy.")
                }
                if (error.code === 'auth/invalid-email-verified') {
                    setError("Email nie został zweryfikowany.")
                }
                if (error.code === 'auth/user-not-found') {
                    setError("Nie ma takiego uzytkownika")
                }

            }
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
                {Object.keys(emailErr).map((key) => { return <div className="error">{emailErr[key]}</div> })}
                {Object.keys(passwordErr).map((key) => { return <div className="error">{passwordErr[key]}</div> })}
            </form>
        </div>
    )
}