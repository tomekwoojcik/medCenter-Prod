import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function RegistView() {


    const [name, setName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [lastname, setLastName] = useState('');
    const [pesel, setPesel] = useState('');
    const [email, setEmail] = useState('');



    const handleDataSubmit = async (e) => {
        await addDoc(collection(db, 'users'), {
            firstName: name,
            secondName: secondName,
            lastname: lastname,
            pesel: pesel,
            email: email
        })
    }

    return (
        <div className="login_container">
            {error && <div className="error" >{error}</div>}
            <form className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" value="name" type="text" onChange={(e) => { setName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" value="secondName" type="text" onChange={(e) => { setSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" value="lastname" type="text" onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" value="pesel" type="text" onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Email:</label>
                <input className="input" value="email" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label_register">Hasło:</label>
                <input className="input" value="password" type="password" />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" />
                <Button onClick={handleDataSubmit} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}