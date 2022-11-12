import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { Button } from '@mui/material';
import { BrowserRouter, useNavigate } from 'react-router-dom';


export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson, book, setBook, readyRegistration } = UserAuth();
    console.log(nullToEndRegistration);
    const navigate = useNavigate()

    async function addBook(event) {
        await setBook(event);
        navigate("./registrationInput", { replace: true });
    }
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
                                            <p>Oczekująca rejestracja u {`${thr.data.title}a`} <span className="noti_person">{`${thr.data.name} ${thr.data.surname}`}</span> </p>
                                            <Button onClick={() => { addBook(first.id) }}  >Dokończ rejestrację</Button>
                                        </div>
                                    )
                                }))

                            }))
                        }
                    </div>
                </div>

                <div className="ready_registrations">
                    <h3>Gotowe rejestrację</h3>
                    <div className="in_box_message">
                        {
                            readyRegistration.map((first => {
                                const person = medPerson.filter(second => {
                                    return second.id.includes(first.data.doctorId);
                                })
                                return (person.map((thr) => {
                                    return (
                                        <div className="notification_message" key={first.id}>
                                            <p>Dokończona rejestracja u {`${thr.data.title}a`} <span className="noti_person">{`${thr.data.name} ${thr.data.surname}`}</span> </p>
                                            <p>Data rejestracji: {`${first.data.dateOfTheVisit}`} </p>
                                            <p>Data rejestracji: {`${first.data.dateOfTheVisit}`} </p>
                                        </div>
                                    )
                                }))

                            }))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
} 