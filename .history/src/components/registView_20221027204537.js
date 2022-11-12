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
    const [lastName, setLastName] = useState("");
    const [secondName, SetSecondName] = useState("");
    const [pesel, setPesel] = useState("");


    const [firstNameErr, setFirstNameErr] = useState({});
    const [secondNameErr, setSecondNameErr] = useState({});
    const [lastNameErr, setLastNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    const [peselErr, setPeselErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

    const { createUser } = UserAuth();
    const navigate = useNavigate();

    const handleDataSubmit = async () => {
        await addDoc(collection(db, 'users'), {
            firstName: firstName,
            secondName: secondName,
            lastName: lastName,
            pesel: pesel,
            email: email,
        })
    }

    const formValidation = () => {
        const firstNameErr = {};
        const secondNameErr = {};
        const lastNameErr = {};
        const emailErr = {};
        const peselErr = {};

        let isValid = true;

        if (firstName.trim().length < 3) {
            firstNameErr.firstNameShort = "First name is too short";
            isValid = false;
        }

        if (firstName.trim().length > 13) {
            firstNameErr.firstNameLong = "First name is too long";
            isValid = false;
        }

        if (firstName === secondName) {
            firstNameErr.firstNameTheSame = "The first name is the same as the second.";
            isValid = false;
        }

        if (secondName === firstName) {
            secondNameErr.secondNameTheSame = "The second name is the same as the first.";
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
        if (lastName.trim().length > 28) {
            lastNameErr.lastNameLong = "Last name is too long";
            isValid = false;
        }

        if (lastName.trim().length < 2) {
            lastNameErr.lastNameShort = "Last name is too short";
            isValid = false;
        }

        if (!email.includes("@")) {
            emailErr.emailNotIncludes = "Email must includes @";
            isValid = false;
        }

        if (pesel.trim().length < 11 || pesel.trim().length > 11) {
            peselErr.peselIsToShortOrToLong = "Pesel is to short or to long, check your pesel.";
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
            // błedy wyświetlane w formularzu wyświetlamy tutaj w formie

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

    return (
        <div className="login_container">
            <form className="regist" onSubmit={handleSubmit}>
                {error && <div className="error" >{error}</div>}
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" type="text" value={secondName} onChange={(e) => { SetSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" value={pesel} onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Email:</label>
                <input className="input" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label_register">Hasło:</label>
                <input className="input" type="password" value={password} onChange={(e) => { setPasword(e.target.value) }} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />
                <Button onClick={handleDataSubmit} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}