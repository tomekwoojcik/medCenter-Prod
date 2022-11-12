import React from "react";

export default function UsersNotifications() {

    const { nullToEndRegistration } = UserAuth();

    return (
        <div className="login_container">
            {
                nullToEndRegistration.map((el => {
                    console.log(el);
                    return (<p>Dokończ swoją rejestrację u lekarza { }</p>)
                }))
            }
        </div>
    )
} 