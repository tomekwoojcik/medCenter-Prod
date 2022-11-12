import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "./context/AuthContext";
// import { db } from "../firebase";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function RegistView() {
    // const [data, setData] = useState({ name: '', secondName: '', lastname: '', pesel: '' });
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [lastName, setLastName] = useState('');
    const [pesel, setPesel] = useState('');


    const [user, setUser] = useState({ email: '', pasword: '' });
    const [error, setError] = useState();

    const { register } = useAuth();
    const navigate = useNavigate();
    const db = getFirestore(app);
    const handleDataSubmit = async (e) => {
        setError(''); //pusty bład aby formularz nie przesówał się w dół
        await addDoc(collection(db, 'users'), {
            firstName: firstName,
            secondName: secondName,
            lastname: lastName,
            pesel: pesel,
            // email: user.email
        })
    }

    // const handleDataChange = ({ target: { name, value } }) => {
    //     setData({ ...data, [name]: value })
    // }
    // const handleDataSubmit = async (e) => {
    //     setError(''); //pusty bład aby formularz nie przesówał się w dół
    //     await addDoc(collection(db, 'users'), {
    //         firstName: data.name,
    //         secondName: data.secondName,
    //         lastname: data.lastname,
    //         pesel: data.pesel,
    //         email: user.email
    //     })
    // }

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
            <form className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" name="name" value={firstName} type="text" onChange={(e) => { setFirstName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" name="secondName" value={secondName} type="text" onChange={(e) => { setSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" name="lastname" type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" name="pesel" type="text" value={pesel} onChange={(e) => { setPesel(e.target.value) }} />
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