import React, { useState } from "react";
import { Button } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginView() {

    const [user, setUser] = useState({ email: "", pasword: "" });
    const [error, setError] = useState();

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
            <form onSubmit={ } className="form">
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