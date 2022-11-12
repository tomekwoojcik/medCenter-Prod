import React, { useEffect, useState } from "react";
import ApiContext from "./context/ApiContext";

export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <ApiContext />
                </form>
            </div>
        </div >
    )
}