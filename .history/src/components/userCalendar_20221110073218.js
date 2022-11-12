import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson } = UserAuth();

    return (
        <div className="login_container">
            <div className="in_box_calendar">
                <h3>Oczekujące rejestrację</h3>
                <div className="pending_registrations">
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
                                        </div>
                                    )
                                }))

                            }))
                        }
                    </div>
                </div>

                <div className="ready_registrations">

                </div>

            </div>

        </div>
    )
} 