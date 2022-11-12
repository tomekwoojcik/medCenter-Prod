import React from "react";
import Button from '@mui/material/Button';
import MenuItems from "./menuItems";
import { useAuth } from "./context/AuthContext";

export default function Menu() {


    const { logout, user } = useAuth()
    const handleLogout = async () => {
        await logout();
    }
    console.log(user);
    // const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 
    return (
        <div className="aside">

            <h1 className="logo"><span className="other_color">med</span>Center<span className="other_color back">+</span></h1>
            <MenuItems />

            <span className="line" >
                <Button href="/loginView" className="button" color="primary" variant="contained">{user !== null ? "Zaloguj" : "Wyloguj"}</Button>
            </span>
        </div>)
}