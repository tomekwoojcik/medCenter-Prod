import React, { useEffect, useState } from "react";
import ApiContexProvider from "./context/ApiContext";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";

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