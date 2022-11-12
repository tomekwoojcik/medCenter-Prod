import React from "react";
import Button from '@mui/material/Button';
import MenuItems from "./menuItems";

export default function Menu() {
    return (
        <div className="aside">

            <h1 className="logo"><span className="other_color">med</span>Center<span className="other_color back">+</span></h1>
            <MenuItems />

            <span className="line" >
                <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>
            </span>
        </div>)
}