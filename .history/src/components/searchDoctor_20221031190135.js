import React, { createContext, useEffect, useState } from "react";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";
import ApiContexProvider from "./context/ApiContext";
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