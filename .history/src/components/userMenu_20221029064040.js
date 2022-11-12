import React from "react";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
export default function UserMenu() {
    return (
        <ul className="menu_userlist">
            <li> <a href="/a" className="menu_items"><AccountCircleIcon className="dash_Board" />Konto uzytkownika</a></li>
            <li> <a href="/searchDoctorView" className="menu_items"><CalendarMonthIcon className="dash_Board" />Kalendarz</a></li>
            <li> <a href="/searchHospitalView" className="menu_items"><NotificationsIcon className="dash_Board" />Powiadomienia</a></li>
        </ul>
    )
}