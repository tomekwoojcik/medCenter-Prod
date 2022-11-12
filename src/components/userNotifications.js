import { Button } from "@mui/material";
import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersNotifications() {

    const { nullToEndRegistration, medPerson } = UserAuth();

    return (
        <div className="login_container">
            <div className="in_box_message">
                {
                    nullToEndRegistration.map((first => {
                        const person = medPerson.filter(second => {
                            return second.id.includes(first.data.doctorId);
                        })
                        return (person.map((thr) => {
                            return (
                                <div className="notification_message" key={first.id}>
                                    <p>Dokończ swoją rejestrację u {`${thr.data.title}a`} <span className="noti_person">{`${thr.data.name} ${thr.data.surname}`}</span></p>
                                    <Button href="/usersCalendar">Przejdź do kalendarza</Button>
                                </div>
                            )
                        }))

                    }))
                }
            </div>
        </div>
    )
} 