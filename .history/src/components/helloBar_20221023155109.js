import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from "../firebase";

export default function MenuBar() {
    // let userName = auth.currentUser.email;
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