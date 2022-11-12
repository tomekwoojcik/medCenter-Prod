import React, { createContext, useEffect, useState } from "react";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";

const ApiContext = createContext();

const ApiContexProvider = ({ children }) => {
    return (
        <ApiContex.Provider value={{ handleButton }}>
            {children}
        </ApiContex.Provider>
    )
}

export default function SearchDoctorView() {





    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <ApiContexProvider>
                        <SearchState place={"Wyszukaj województwo"} />
                        <SearchCity place={"Wyszukaj miasto"} />
                    </ApiContexProvider>
                </form>
            </div>
        </div >
    )
}