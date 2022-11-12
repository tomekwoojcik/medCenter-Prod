import React from "react";
import { UserAuth, MedPerson } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    console.log(MedPerson);
                    return (
                        <div className="notification_message" key={el.id}>
                            {/* <p>Dokończ swoją rejestrację u doktora {
                                MedPerson.filter(e => {
                                    return e.data.id.includes(el.data.doctorId);})
                            }</p> */}
                        </div>
                    )
                }))
            }
        </div>
    )
} 