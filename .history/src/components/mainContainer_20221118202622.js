import React from "react";
import MenuBar from "./helloBar";
import BlindMenuBar from "./blindMenuBar";
import MainView from "./mainView";
import FooterContainer from "./footer";
import { UserAuth } from "./context/AuthContext";


export default function MainContainer() {
    const { user } = UserAuth();
    return (
        <div className="main_container">
            {user !== null ? <MenuBar /> : <BlindMenuBar />}
            <MainView />
            <FooterContainer />
        </div>
    )
}

