import React, { useState } from "react";
import { Button } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function RegistView() {

    const [name, setName] = useState(" ");
    const [secondName, setSecondName] = useState(" ");
    const [lastname, setLastName] = useState(" ");
    const [pesel, setPesel] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [pasword, setPasword] = useState(" ");
    const [confirmPasword, setConfirmPasword] = useState(" ");
    const [user, setUser] = useState({});

    const auth = getAuth();

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, pasword);
            console.log(user);
        }
        catch (error) {
            console.log(error.message)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" && secondName === "" && lastname === "" && pesel === "") {
            return
        }
        const userDataColl = collection(db, 'users');
        console.log(user);
        addDoc(userDataColl, { name, secondName, lastname, pesel, email, pasword }).then(response => { console.log(response) }).catch(console.error(error => console.log(error.message)))
    }

    return (
        <div className="login_container">
            {/* {error && <div className="error" >{error}</div>} */}
            <form onSubmit={handleSubmit} className="regist">
                <label className="label_register" >Pierwsze imię:</label>
                <input className="input" type="text" onChange={(e) => { setName(e.target.value) }} />
                <label className="label_register">Drugię imię:</label>
                <input className="input" type="text" onChange={(e) => { setSecondName(e.target.value) }} />
                <label className="label_register">Nazwisko:</label>
                <input className="input" type="text" onChange={(e) => { setLastName(e.target.value) }} />
                <label className="label_register">Pesel:</label>
                <input className="input" type="text" onChange={(e) => { setPesel(e.target.value) }} />
                <label className="label_register">Email:</label>
                <input className="input" type="email" onChange={(e) => { setEmail(e.target.value) }} />
                <label className="label_register">Hasło:</label>
                <input className="input" type="password" onChange={(e) => { setPasword(e.target.value) }} />
                <label className="label_register">Powtórz hasło:</label>
                <input className="input" type="password" onChange={(e) => { setConfirmPasword(e.target.value) }} />
                <Button onClick={register} type="submit" className="register_button" color="secondary" variant="contained" endIcon={<SendIcon />}>Zarejestruj</Button>
            </form>

            <div className="background"></div>
        </div>
    )
}