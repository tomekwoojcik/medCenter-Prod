import React from "react";
import { SearchCity } from "./searchElement/searchCity";
import SearchResultViewHospital from "./searchResultViewHospital";
import { SearchNFZ } from "./searchElement/searchNFZ";
import { SearchHospitalInCity } from "./searchElement/searchHospitalInCity";

export default function SearchHospitalView() {
    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    {/* <SearchState place={"Wyszukaj województwo"} /> */}
                    <SearchNFZ />
                    <SearchCity place={"Wyszukaj miasto"} />
                    <SearchHospitalInCity />
                    {/* <SearchProfession place={"Wyszukaj specjalizacje"} /> */}

                </form>
                <SearchResultViewHospital />


            </div>
        </div >
    )
}

