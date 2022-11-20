import React from "react";
import MenuBar from "./helloBar";
import BlindMenuBar from "./blindMenuBar";
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
import { UserAuth } from "./context/AuthContext";
import UsersAccount from "./usersAccount";
import UsersNotifications from "./userNotifications";
import UsersCalendar from "./userCalendar";
import RegistrationInput from "./registrationInput";
import Main from "./main";

import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


export default function MainContainer() {
    const { user } = UserAuth();
    return (
        <div className="main_container">
            {user !== null ? <MenuBar /> : <BlindMenuBar />}
            <Router>
                <ul className="menu_list">
                    <Link href="main" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</Link>
                    <Link href="searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</Link>
                    <Link href="searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</Link>
                </ul>                <Routes>
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
            </Router>
            <FooterContainer />
        </div>
    )
}

