import React from "react";
import { Outlet } from "react-router-dom";
export default function MainView() {


    return (
        <div className="cont">
            <Outlet></Outlet>
        </div>
    )
}