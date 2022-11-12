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
    const handleDataSubmit = async () => {
        await addDoc(collection(db, 'users'), {
            firstName: data.name,
            secondName: data.secondName,
            lastname: data.lastname,
            pesel: data.pesel,
            email: user.email
        })
    }

    // const handleChange = ({ target: { name, value } }) => {
    //     setUser({ ...user, [name]: value })
    // }

    // const handleSubmit = async (e) => {
    //     setError(''); //pusty bład aby formularz nie przesówał się w dół
    //     e.preventDefault();
    //     try {
    //         await register(user.email, user.pasword);
    //         navigate("/");


    //     } catch (error) {
    //         setError(error.message)
    //         //błedy wyświetlane w formularzu wyświetlamy tutaj w formie

    //         // if(error.code === ''){
    //         //     setError("text errora")
    //         // }
    //     }
    // }


    return (
        <div className="login_container">
            {error && <div className="error" >{error}</div>}
            <form className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" name="name" type="text" onChange={handleDataChange} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" name="secondName" type="text" onChange={handleDataChange} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" name="lastname" type="text" onChange={handleDataChange} />
                <label className="label_register">Pesel:</label>
                <input className="input" name="pesel" type="text" onChange={handleDataChange} />
                <label className="label_register">Email:</label>
                <input className="input" name="email" type="email" onChange={handleChange} />
                <label className="label_register">Hasło:</label>
                <input className="input" name="password" type="password" onChange={handleChange} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" />
                <Button onClick={handleDataSubmit} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}