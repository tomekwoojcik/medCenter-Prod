import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import UserMenu from "./userMenu";
import BlindUserMenu from "./blindUserMenu";
import { UserAuth } from "./context/AuthContext";
import { Link, Router } from "react-router-dom";

export default function MenuItems() {
    const { user } = UserAuth();

    return (
        <Router>
            <ul className="menu_list">
                <li> <Link to="/" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</Link></li>
                <li> <Link to="/searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</Link></li>
                <li> <Link to="/searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</Link></li>
                {user !== null ? <UserMenu /> : <BlindUserMenu />}
            </ul>
        </Router>
    )
}



