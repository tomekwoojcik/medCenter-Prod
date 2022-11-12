import React, { createContext, useEffect, useState } from "react";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";
import ApiProvider from "./context/ApiContext";
export default function SearchDoctorView() {





    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <ApiProvider>
                        <SearchState place={"Wyszukaj województwo"} />
                        <SearchCity place={"Wyszukaj miasto"} />
                    </ApiProvider>
                </form>
            </div>
        </div >
    )
}