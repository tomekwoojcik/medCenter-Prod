import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { UserAuth } from "./context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function RegistView() {
    const [error, setError] = useState();
    const [password, setPasword] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [secondName, SetSecondName] = useState("");
    const [pesel, setPesel] = useState("");

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await createUser(email, password)
        } catch (error) {
            setError(error.message);
            console.log(error.message)
            // błedy wyświetlane w formularzu wyświetlamy tutaj w formie

            // if(error.code === ''){
            //     setError("text errora")
            // }
        }
    }

    return (
        <div className="login_container">
            {error && <div className="error" >{error}</div>}
            <form className="regist" onSubmit={handleSubmit}>
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" type="text" value={secondName} onChange={(e) => { SetSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" value={lastname} onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" value={pesel} onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Email:</label>
                <input className="input" type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label_register">Hasło:</label>
                <input className="input" type="password" value={password} onChange={(e) => { setPasword(e.target.value) }} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" />
                <Button onClick={handleDataSubmit} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}