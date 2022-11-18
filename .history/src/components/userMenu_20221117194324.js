import React from "react";
import { Link } from "react-router-dom";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function UserMenu() {
    return (
        <ul className="menu_userlist">
            <li> <Link to="/userAccount" className="menu_items"><AccountCircleIcon className="dash_Board" />Konto uzytkownika</Link></li>
            <li> <Link to="/usersCalendar" className="menu_items"><CalendarMonthIcon className="dash_Board" />Kalendarz</Link></li>
            <li> <Link to="/userNotifications" className="menu_items"><NotificationsIcon className="dash_Board" />Powiadomienia</Link></li>
        </ul>
    )
}