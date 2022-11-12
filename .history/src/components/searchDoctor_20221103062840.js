import React, { createContext, useEffect, useState } from "react";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";
import { SearchProfessionŃ } from "./searchElement/SearchProfession";
export default function SearchDoctorView() {





    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <SearchState place={"Wyszukaj województwo"} />
                    <SearchCity place={"Wyszukaj miasto"} />
                    {/* <SearchProfession place={"Wyszukaj specjalizacje"} /> */}

                </form>
            </div>
        </div >
    )
}