import React from "react";
import { UserAuth } from "./context/AuthContext";

export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson, value, setValue } = UserAuth();
    let today = new Date;

    return (
        <div className="login_container">
            <div className="in_box_calendar">

                <div className="pending_registrations">
                    <h3>Oczekujące rejestrację</h3>
                    <div className="in_box_message">
                        {
                            nullToEndRegistration.map((first => {
                                const person = medPerson.filter(second => {
                                    return second.id.includes(first.data.doctorId);
                                })
                                return (person.map((thr) => {
                                    return (
                                        <div className="notification_message" key={first.id}>
                                            <p>Oczekująca rejestracja u {`${thr.data.title}a`} <span className="noti_person">{`${thr.data.name} ${thr.data.surname}`}</span></p>
                                            <form>
                                                <input type="date" id="start" name="trip-start"
                                                    value="2018-07-22"
                                                    min="2018-01-01" max="2018-12-31" />
                                            </form>
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