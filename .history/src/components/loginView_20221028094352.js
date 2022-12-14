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
        const firstNameErr = {};
        const secondNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        const peselErr = {};
        const passwordErr = {};
        const confirmPasswordErr = {};


        let isValid = true;

        if (firstName.trim().length < 3 || firstName.trim().length > 13 || firstName === "") {
            firstNameErr.firstNameLenght = "First name is too short or too long";
            isValid = false;
        }

        if (firstName === secondName) {
            firstNameErr.firstNameTheSame = "The first name is the same as the second.";
            isValid = false;
        }

        if (secondName.trim().length < 3 || secondName.trim().length > 13 || secondName === "") {
            secondNameErr.secondNameLenght = "Second name is too short or too long";
            isValid = false;
        }

        if (lastName.trim().length > 28 || lastName.trim().length < 2 || lastName === "") {
            lastNameErr.lastNameLenght = "Last name is too long or to short";
            isValid = false;
        }

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
        setError(''); //pusty b??ad aby formularz nie przes??wa?? si?? w d????
        e.preventDefault();
        const isValid = formValidation();
        try {
            await signIn(email, password);
            navigate("/");


        } catch (error) {
            setError(error.message)
            //b??edy wy??wietlane w formularzu wy??wietlamy tutaj w formie

            // if(error.code === ''){
            //     setError("text errora")
            // }
        }
    }
    return (
        <div className="login_container">
            <img className="img_login" alt="lekarz wypisuj??cy skierowanie" src="https://www.wroclaw.pl/beta2/files/news/153034/main/lekarz-skierowanie.jpg"></img>
            <form className="form" onSubmit={handleSubmit}>
                <h3 className="form_title">Zaloguj si??:</h3>
                <label className="label">Email uzytkownika:</label>
                <input className="login_Input" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label">Has??o uzytkownika:</label>
                <input className="password_Input" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <Button type="submit" className="button" variant="outlined">Zaloguj</Button>
                <p>Nieposiadasz konta? <a href="/registView" className="button_regist">Zarejestruj si??...</a></p>
                {error && <div className="error" >{error}</div>}
            </form>
        </div>
    )
}