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
    Route
} from 'react-router-dom';
import { ProtectedRoute } from "./protectedRoute";
import { UserAuth } from "./context/AuthContext";
import UsersAccount from "./usersAccount";
import UsersNotifications from "./userNotifications";
import UsersCalendar from "./userCalendar";
import RegistrationInput from "./RegistrationInput";


export default function MainContainer() {
    const { user } = UserAuth();
    return (
        <div className="main_container">
            {user !== null ? <MenuBar /> : <BlindMenuBar />}

            <Router>
                <Routes>
                    <Route path="loginView" element={<LoginView />} ></Route>
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
                    <Route path="mainView" element={<MainView />} ></Route>
                    <Route path="searchDoctorView" element={<SearchDoctorView />} ></Route>
                    <Route path="searchHospitalView" element={<SearchHospitalView />} ></Route>
                    <Route path="registrationInput" element={<RegistrationInput />} ></Route>

                </Routes>
            </Router>
            <FooterContainer />
        </div>
    )
}

