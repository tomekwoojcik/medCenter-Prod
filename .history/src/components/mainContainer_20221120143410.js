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
import Button from '@mui/material/Button';

import DashboardIcon from '@mui/icons-material/Dashboard';
import SearchIcon from '@mui/icons-material/Search';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import BlindUserMenu from "./blindUserMenu";


export default function MainContainer() {
    const { user, logout, loading } = UserAuth();
    const handleLogout = async () => {
        try {
            await logout();

        } catch (error) {
            console.log(error.message);
        }


    }
    if (loading) return <h1>loading...</h1>/// zmienić, mówimy tutaj ze dopóki nie ma uźytkownika appka ma się ładować
    // const {login} = UserAuth(); zwraca informacje o uzytkowniku/ umoliwia przechwycenie informacji które umieszczamy w obiekcie <authContext.Provider value={{ register, login, user, logout }}>
    return (
        <div className="main_container">
            {user !== null ? <MenuBar /> : <BlindMenuBar />}
            <Router>
                <div className="menu">
                    <h1 className="logo"><span className="other_color">med</span>Center<span className="other_color back">+</span></h1>
                    <ul className="menu_userlist">
                        <li><Link to="/" className="menu_items"><DashboardIcon className="dash_Board" />Okno główne</Link></li>
                        <li><Link to="searchDoctorView" className="menu_items"><SearchIcon className="dash_Board" />Wyszukaj lekarza</Link></li>
                        <li><Link to="searchHospitalView" className="menu_items"><LocalHospitalIcon className="dash_Board" />Wyszukaj poradnię</Link></li>
                    </ul>
                    {user !== null ? <ul className="menu_userlist">
                        <li> <Link to="/userAccount" className="menu_items"><AccountCircleIcon className="dash_Board" />Konto uzytkownika</Link></li>
                        <li> <Link to="/usersCalendar" className="menu_items"><CalendarMonthIcon className="dash_Board" />Kalendarz</Link></li>
                        <li> <Link to="/userNotifications" className="menu_items"><NotificationsIcon className="dash_Board" />Powiadomienia</Link></li>
                    </ul> : <BlindUserMenu />}
                    {user !== null ? <Button onClick={handleLogout} className="button" color="primary" variant="contained">Wyloguj</Button> : <Button href="/loginView" className="button" color="primary" variant="contained">Zaloguj</Button>}
                </div>
                <Routes>
                    <Route path="/" element={<MainView />} >
                        <Route path="loginView" element={<LoginView />} ></Route>
                        <Route path="/" element={<Main />} ></Route>
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
                        <Route path="loginView/:/" element={<Main />} ></Route>

                    </Route>
                </Routes>
            </Router>
            <FooterContainer />
        </div>
    )
}

