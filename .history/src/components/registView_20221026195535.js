import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { async } from "@firebase/util";
import { faJugDetergent } from "@fortawesome/free-solid-svg-icons";

export default function RegistView() {
    const [data, setData] = useState({ name: '', secondName: '', lastname: '', pesel: '', email: '' });
    const [user, setUser] = useState({ email: '', pasword: '' });
    const [error, setError] = useState();

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleDataChange = ({ target: { name, value } }) => {
        setData({ ...data, [name]: value })
    }

    const handleDataSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        e.preventDefault();
        try {
            await register(data.name, data.secondName, data.lastname, data.pesel, data.email);
            navigate("/");


        } catch (error) {
            setError(error.message)
            //błedy wyświetlane w formularzu wyświetlamy tutaj w formie

            // if(error.code === ''){
            //     setError("text errora")
            // }
        }
    }


    const handleChange = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        e.preventDefault();
        try {
            await register(user.email, user.pasword);
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
            {error && <div className="error" >{error}</div>}
            <form onSubmit={handleSubmit} className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" name="name" type="text" />
                <label className="label_register">Drugię imię:</label>
                <input className="input" name="secondName" type="text" />
                <label className="label_register">Nazwisko:</label>
                <input className="input" name="lastname" type="text" />
                <label className="label_register">Pesel:</label>
                <input className="input" name="pesel" type="text" />
                <label className="label_register">Email:</label>
                <input className="input" name="email" type="email" onChange={handleChange} />
                <label className="label_register">Hasło:</label>
                <input className="input" name="password" type="password" onChange={handleChange} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" />
                <Button type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}