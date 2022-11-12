import React from "react";
import Button from '@mui/material/Button';
import MenuItems from "./menuItems";
import { useAuth } from "./context/AuthContext";

export default function Menu() {


    // const { logout, user, loading } = useAuth()
    const handleLogout = async () => {
        await logout();
    }

    if (loading) return <h1>loading...</h1>/// zmienić, mówimy tutaj ze dopóki nie ma uźytkownika appka ma się ładować
    console.log(user);
    // const {login} = useAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}> 
    return (
        <div className="aside">

            <h1 className="logo"><span className="other_color">med</span>Center<span className="other_color back">+</span></h1>
            <MenuItems />

            <span className="line" >
                {user !== null ? <Button onClick className="button" color="primary" variant="contained">Wyloguj</Button> : <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>}
            </span>
        </div>)
}