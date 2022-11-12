import React, { useEffect, useState } from "react";

export default function SearchDoctorView() {

    return (
        <div className="login_container">
            <div className="searchDiv">
                <form>
                    <Search place={"Wyszukaj województwo"} arr={wojArr} />
                </form>
            </div>
        </div >
    )
}