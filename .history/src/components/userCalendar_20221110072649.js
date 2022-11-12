import React from "react";

export default function UsersCalendar() {
    const { nullToEndRegistration, medPerson } = UserAuth();

    return (
        <div className="login_container">
            <div className="in_box_calendar">
                <div className="pending_registrations">

                </div>

                <div className="ready_registrations">

                </div>

            </div>

        </div>
    )
} 