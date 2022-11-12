import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import ReactDateInputs from 'react-date-inputs';


export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson } = UserAuth();
    const [inputDate, setInputDate] = useState(new Date())

    let today = new Date;
    console.log(inputDate);
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
                                                <input value={inputDate} onChange={setInputDate} type="date" />
                                                <input type="time" />
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