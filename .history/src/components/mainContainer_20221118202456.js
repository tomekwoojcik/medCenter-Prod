import React from "react";
import MenuBar from "./helloBar";
import BlindMenuBar from "./blindMenuBar";
import MainView from "./mainView";
import { UserAuth } from "./context/AuthContext";


export default function MainContainer() {
    const { user } = UserAuth();
    return (
        <div className="main_container">
            {user !== null ? <MenuBar /> : <BlindMenuBar />}
            <MainView />
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
            <FooterContainer />
        </div>
    )
}

