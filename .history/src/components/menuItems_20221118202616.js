import React from "react";
import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import UserMenu from "./userMenu";
import BlindUserMenu from "./blindUserMenu";
import { UserAuth } from "./context/AuthContext";

import LoginView from "./loginView";
import RegistView from "./registView";
import MainView from "./mainView";
import SearchDoctorView from "./searchDoctor";
import SearchHospitalView from "./searchHospital";

import FooterContainer from "./footer";
import {
    BrowserRouter as Router,
    Routes,
    Route, Link
} from 'react-router-dom';
import { ProtectedRoute } from "./protectedRoute";
import UsersAccount from "./usersAccount";
import UsersNotifications from "./userNotifications";
import UsersCalendar from "./userCalendar";
import RegistrationInput from "./registrationInput";
import Main from "./main";

export default function MenuItems() {
    const { user } = UserAuth();

    return (
        {/* <Router>
                <Link to="main" className="menu_items">Okno główne</Link>
                <Routes>
                    <Route path="/" element={<MainView />} >
                        <Route path="loginView" element={<LoginView />} ></Route>
                        <Route path="main" element={<Main />} ></Route>
                        <Route path="registView" element={<RegistView />} ></Route>
                        <Route path="userView" element={
                            <ProtectedRoute>
                                <UsersAccount />
                                <UsersNotifications />
                                <UsersCalendar />
                            </ProtectedRoute> //zabezpieczenie routingu do mainview 
                        } ></Route>
                        <Route path="userAccount" element={<UsersAccount />}></Route>
                        <Route path="userNotifications" element={<UsersNotifications />}></Route>
                        <Route path="usersCalendar" element={<UsersCalendar />}></Route>
                        <Route path="searchDoctorView" element={<SearchDoctorView />} ></Route>
                        <Route path="searchHospitalView" element={<SearchHospitalView />} ></Route>
                        <Route path="usersCalendar/:registrationInput" element={<RegistrationInput />} ></Route>
                    </Route>
                </Routes>
            </Router> */}
        < ul className = "menu_list" >
            <li> <a href="main" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</a></li>
            <li> <a href="searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</a></li>
            <li> <a href="searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</a></li>
    { user !== null ? <UserMenu /> : <BlindUserMenu /> }
        </ul >
    )
}



