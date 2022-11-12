import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration, medPerson } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    console.log(medPerson);
                    return (
                        <div className="notification_message" key={el.id}>
                            {/* <p>Dokończ swoją rejestrację u doktora {
                                medPerson.filter(e => {
                                    return e.data.id.includes(el.data.doctorId);})
                            }</p> */}
                        </div>
                    )
                }))
            }
        </div>
    )
} 