import React from "react";
import Button from '@mui/material/Button';
import MenuItems from "./menuItems";
import { UserAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Menu() {
    const { logout, user, loading } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/");

        } catch (error) {
            console.log(error.message);
        }


    }

    if (loading) return <h1>loading...</h1>/// zmienić, mówimy tutaj ze dopóki nie ma uźytkownika appka ma się ładować
    console.log(user);
    // const {login} = UserAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 
    return (
        <div className="aside">

            <h1 className="logo"><span className="other_color">med</span>Center<span className="other_color back">+</span></h1>
            <MenuItems />

            <span className="line" >
                {user !== null ? <Button onClick={handleLogout} className="button" color="primary" variant="contained">Wyloguj</Button> : <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>}
            </span>
        </div>)
}