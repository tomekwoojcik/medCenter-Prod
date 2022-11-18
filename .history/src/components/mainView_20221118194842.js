import React from "react";
import { Outlet } from "react-router-dom";
export default function MainView() {


    return (
        <div className="login_container">
            <Outlet></Outlet>
        </div>
    )
}