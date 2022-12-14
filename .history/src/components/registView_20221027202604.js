import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { UserAuth } from "./context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function RegistView() {
    const [error, setError] = useState();
    const [password, setPasword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [secondName, SetSecondName] = useState("");
    const [pesel, setPesel] = useState("");


    const [firstNameErr, setFirstNameErr] = useState({});
    const [secondNameErr, setSecondNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [PeselErr, setPeselErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleDataSubmit = async () => {
        await addDoc(collection(db, 'users'), {
            firstName: firstName,
            secondName: secondName,
            lastname: lastname,
            pesel: pesel,
            email: email,
        })
    }

    const formValidation = () => {
        const firstNameErr = {};
        const secondNameErr = {};
        let isValid = true;

        if (firstName.trim().length < 3) {
            firstNameErr.firstNameShort = "First name is too short";
            isValid = false;
        }

        if (firstName.trim().length > 13) {
            firstNameErr.firstNameLong = "First name is too long";
            isValid = false;
        }

        if (secondName === firstName) {
            secondNameErr.secondNameShort = "Second name is too short";
            isValid = false;
        }

        if (secondName.trim().length < 3) {
            secondNameErr.secondNameShort = "Second name is too short";
            isValid = false;
        }

        if (secondName.trim().length > 13) {
            secondNameErr.secondNameLong = "Second name is too long";
            isValid = false;
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = formValidation()
        setError("");
        try {
            await createUser(email, password);
            navigate("/"); // elemnt po stworzeniu konta przenosi nas w wskazane miejsce.
        } catch (error) {
            setError(error.message);
            console.log(error.message)
            // b??edy wy??wietlane w formularzu wy??wietlamy tutaj w formie

            if (error.code === 'auth/invalid-email') {
                setError("Podany email jest nieprawid??owy.")
            }
            if (error.code === 'auth/invalid-email-verified') {
                setError("Email nie zosta?? zweryfikowany.")
            }
            if (error.code === 'auth/user-not-found') {
                setError("Nie ma takiego uzytkownika")
            }

        }
    }

    return (
        <div className="login_container">
            <form className="regist" onSubmit={handleSubmit}>
                {error && <div className="error" >{error}</div>}
                <label className="label_register" >Pierwsze imi??:</label>
                <input className="input" type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <label className="label_register">Drugi?? imi??:</label>
                <input className="input" type="text" value={secondName} onChange={(e) => { SetSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" value={pesel} onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Email:</label>
                <input className="input" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label_register">Has??o:</label>
                <input className="input" type="password" value={password} onChange={(e) => { setPasword(e.target.value) }} />
                <label className="label_register">Powt??rz has??o:</label>
                <input className="input" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <Button onClick={handleDataSubmit} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}