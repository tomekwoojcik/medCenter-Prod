import React from "react";
import { UserAuth, setMedPerson } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    console.log(el);
                    return (
                        <div className="notification_message" key={el.id}>
                            {/* <p>Dokończ swoją rejestrację u doktora {
                                setMedPerson.filter(e => {
                                    return e.data.id.includes(el.data.);})
                            }</p> */}
                        </div>
                    )
                }))
            }
        </div>
    )
} 