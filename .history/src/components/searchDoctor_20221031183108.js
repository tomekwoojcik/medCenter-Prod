import React, { createContext, useEffect, useState } from "react";
import ApiContexProvider from "./context/ApiContext";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";

const ApiContex = createContext();

export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <SearchState place={"Wyszukaj województwo"} />
                    <SearchCity place={"Wyszukaj miasto"} />
                </form>
            </div>
        </div >
    )
}