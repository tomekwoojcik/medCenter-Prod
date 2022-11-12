import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    console.log(el);
                    return (<p>Dokończ swoją rejestrację u lekarza {el.data.doctorId}</p>)
                }))
            }
        </div>
    )
} 