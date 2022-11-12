import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import { UserAuth } from "./context/AuthContext";

export default function SearchResultView() {
    const { medPerson } = UserAuth();

    return (
        <div className="search_container">
            {medPerson.map((el) => {
                return (
                    <div key={el.id} className="med_person">
                    </div>
                )
            })}
        </div>
    )
}