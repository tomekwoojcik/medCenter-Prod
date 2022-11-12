import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function RegistView() {
    const [data, setData] = useState({ name: '', secondName: '', lastname: '', pesel: '' });
    const [user, setUser] = useState({ email: '', pasword: '' });
    const [error, setError] = useState();

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleDataChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }
    const handleDataSubmit = async (e) => {
        await addDoc(collection(db, 'users'), {
            firstName: data.name,
            secondName: data.secondName,
            lastname: data.lastname,
            pesel: data.pesel,
            email: user.email
        })
    }

    return (
        <div className="login_container">
            {error && <div className="error" >{error}</div>}
            <form className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" value="name" type="text" onChange={(e) => { target.}} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" value="secondName" type="text" onChange={handleDataChange} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" value="lastname" type="text" onChange={handleDataChange} />
                <label className="label_register">Pesel:</label>
                <input className="input" value="pesel" type="text" onChange={handleDataChange} />
                <label className="label_register">Email:</label>
                <input className="input" value="email" type="email" />
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