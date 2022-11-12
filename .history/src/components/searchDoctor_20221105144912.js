import React from "react";
import { SearchCity } from "./searchElement/searchCity";
import { SearchState } from "./searchElement/searchState";
import { SearchProfession } from "./searchElement/SearchProfession";
import SearchResultView from "./searchResultView";
export default function SearchDoctorView() {





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