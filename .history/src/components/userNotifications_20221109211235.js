import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration, medPerson } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    const person = medPerson.filter(e => {
                        return e.id.includes(el.data.doctorId);
                    })
                    const [obj] = person;
                    console.log(obj);
                    return (
                        <div className="notification_message" key={el.id}>
                            <p>Dokończ swoją rejestrację u doktora {`${person.data.name} ${person.data.surname}`}</p>
                        </div>
                    )
                }))
            }
        </div>
    )
} 