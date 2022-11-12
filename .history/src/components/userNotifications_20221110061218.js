import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration, medPerson } = UserAuth();



    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((first => {
                    const person = medPerson.filter(second => {
                        return second.id.includes(first.data.doctorId);
                    })
                    person.map((thr) => {
                        return (
                            <div className="notification_message" key={first.id}>
                                <p>Dokończ swoją rejestrację u doktora {`${thr.data.name} ${thr.data.surname}`}</p>
                            </div>
                        )
                    })

                }))
            }
        </div>
    )
} 