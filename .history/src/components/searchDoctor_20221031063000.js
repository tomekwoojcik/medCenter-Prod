import React, { useEffect, useState } from "react";
import ApiContext from "./context/ApiContext";
import { SearchState } from "./searchElement/searchState";

export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <SearchState place={"Wyszukaj województwo"} />
                </form>
            </div>
        </div >
    )
}