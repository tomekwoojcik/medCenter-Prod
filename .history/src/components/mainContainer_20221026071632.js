import React from "react";
import MenuBar from "./helloBar";
import LoginView from "./loginView";
import RegistView from "./registView";
import MainView from "./mainView";
import SearchDoctorView from "./searchDoctor";
import SearchHospitalView from "./searchHospital";
import ForgetPassword from "./forgetPasword";
import NewPassword from "./newPassword";

import FooterContainer from "./footer";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import { useAuth } from "./context/AuthContext";

export default function MainContainer() {

    const { user } = useAuth();
    return (
        <div className="main_container">
            <MenuBar />
            <Router>
                <Routes>
                    <Route path="loginView" element={<LoginView />} ></Route>
                    <Route path="registView" element={<RegistView />} ></Route>
                    <Route path="/" element={<MainView />} ></Route>
                    <Route path="searchDoctorView" element={<SearchDoctorView />} ></Route>
                    <Route path="searchHospitalView" element={<SearchHospitalView />} ></Route>
                    <Route path="forgetPasword" element={<ForgetPassword />} ></Route>
                    <Route path="newPasword" element={<NewPassword />} ></Route>

                </Routes>
            </Router>
            <FooterContainer />
        </div>
    )
}