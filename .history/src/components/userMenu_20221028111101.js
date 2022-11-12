import React from "react";

export default function UserMenu() {
    return (
        <ul className="menu_userlist">
            <li> <a href="/mainView" className="menu_items"><DashboardIcon className="dash_Board" />Konto uzytkownika</a></li>
            <li> <a href="/searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Kalendarz</a></li>
            <li> <a href="/searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Powiadomienia</a></li>
        </ul>
    )
}