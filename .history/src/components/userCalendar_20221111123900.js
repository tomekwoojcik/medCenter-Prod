import React, { useState } from "react";
import { UserAuth } from "./context/AuthContext";
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson, addBook, book } = UserAuth();
    console.log(book);
    const navigate = useNavigate();
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
                                            <Button onClick={() => { book.push(first.id); navigate('/registrationInput') }}  >Dokończ rejestrację</Button>
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