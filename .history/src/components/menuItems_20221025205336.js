import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

export default function MenuItems() {
    return (
        <ul className="menu_list">
            <li> <a href="/" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</a></li>
            <li> <a href="/searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</a></li>
            <li> <a href="/searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</a></li>
        </ul>
    )
} 