import React, { useState } from "react";
import { Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginView() {

    const [email, setEmail] = useState(" ");
    const [pasword, setPasword] = useState(" ");

    const auth = getAuth();

    const logIn = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                pasword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message)
        }
    }

    // const blurInput = () => {
    //     const loginInput = document.querySelector(".login_Input")
    //     loginInput.style.backgroundColor = "#edf4f4";
    // }

    // const blurPasword = () => {
    //     const passwordInput = document.querySelector(".password_Input")
    //     passwordInput.style.backgroundColor = "#edf4f4";
    //     if (passwordInput.value === " ") {
    //         passwordInput.style.backgroundColor = "white";
    //     }
    // }

    return (
        <div className="login_container">
            <img className="img_login" alt="lekarz wypisujący skierowanie" src="https://www.wroclaw.pl/beta2/files/news/153034/main/lekarz-skierowanie.jpg"></img>
            <form onSubmit={logIn} className="form">
                <h3 className="form_title">Zaloguj się:</h3>
                <label className="label">Email uzytkownika:</label>
                <input className="login_Input" onChange={(e) => { setEmail(e.target.value) }} type="email" />
                <label className="label">Hasło uzytkownika:</label>
                <input className="password_Input" onChange={(e) => { setPasword(e.target.value) }} type="password" />
                <Button type="submit" className="button" variant="outlined">Zaloguj</Button>
                <p>Nieposiadasz konta? <a href="/registView" className="button_regist">Zarejestruj się...</a></p>
            </form>
        </div>
    )
}