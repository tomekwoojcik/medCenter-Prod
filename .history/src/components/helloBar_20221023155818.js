import React, { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function MenuBar() {

    const [user, setUser] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    // let userName = auth.currentUser.email;

    let userName = null;
    let notificationCounter = 0;
    return (
        <div className="box_bar">
            <h2 className="hello_msg">Cześć {userName}</h2>
            <button className="in_box">
                <div className="message_box">
                    <h4>Masz obecnie <span className="notification_counter">{notificationCounter}</span> powiadomień</h4>
                    <p>Przejdź do powiadomień.</p>
                </div>
                <span className="circle" />
                <NotificationsIcon />
            </button>
        </div>
    )
}