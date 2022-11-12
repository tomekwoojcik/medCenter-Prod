import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserAuth } from './context/AuthContext';

export default function MenuBar() {
    const { user } = UserAuth()
    let notificationCounter = 0;
    return (
        <div className="box_bar">
            <h2 className="hello_msg">Witaj: <span className="user_inBox">{user.email}</span></h2>
            <button className="in_box">
                <div onClick={() => { }} className="message_box">
                    <h4>Masz obecnie <span className="notification_counter">{notificationCounter}</span> powiadomień</h4>
                    <p>Przejdź do powiadomień.</p>
                </div>
                <span className="circle" />
                <NotificationsIcon />
            </button>
        </div>
    )
}