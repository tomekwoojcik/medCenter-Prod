import React from "react";
export default function SearchHospitalView() {
    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <SearchState place={"Wyszukaj województwo"} />
                    <SearchCity place={"Wyszukaj miasto"} />
                    <SearchProfession place={"Wyszukaj specjalizacje"} />

                </form>
            </div>
        </div >
    )
}

