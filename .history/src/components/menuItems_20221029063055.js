import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import UserMenu from "./userMenu";
import BlindUserMenu from "./userMenu";
export default function MenuItems() {
    const { logout, user, loading } = UserAuth();


    return (
        <ul className="menu_list">
            <li> <a href="/mainView" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</a></li>
            <li> <a href="/searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</a></li>
            <li> <a href="/searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</a></li>
            {user !== null ? <BlindUserMenu /> : <UserMenu />}

        </ul>
    )
} 