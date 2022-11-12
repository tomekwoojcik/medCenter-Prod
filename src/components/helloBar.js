import React from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { UserAuth } from './context/AuthContext';

export default function MenuBar() {
    const { user, notificationNumber } = UserAuth()
    return (
        <div className="box_bar">
            <h2 className="hello_msg">Witaj: <span className="user_inBox">{user.email}</span></h2>
            <button className="in_box">
                <a href="./userNotifications" className="message_box">
                    <h4>Masz obecnie <span className="notification_counter">{notificationNumber}</span> powiadomień</h4>
                    <p>Przejdź do powiadomień.</p>
                </a>
                {notificationNumber !== 0 ? <span className="circle" /> : <span />}
                <NotificationsIcon />
            </button>
        </div>
    )
}