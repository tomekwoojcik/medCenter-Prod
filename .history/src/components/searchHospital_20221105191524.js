import React from "react";
import { SearchState } from "./searchElement/searchState";
import { SearchCity } from "./searchElement/searchCity";
import { SearchProfession } from "./searchElement/SearchProfession";
export default function SearchHospitalView() {
    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <SearchState place={"Wyszukaj województwo"} />
                    <SearchCity place={"Wyszukaj miasto"} />
                    <SearchProfession place={"Wyszukaj specjalizacje"} />

                </form>

                <SearchResultView />

            </div>
        </div >
    )
}

