import {Outlet} from "react-router-dom";
import Footer from "../components/footer/Footer";
import React from "react";
import LeftSide from "../components/auth/LeftSide";

const AuthLayout = () => (
    <>
        <div id="auth-pages">
            <LeftSide/>
            <Outlet/>
        </div>
        <Footer/>
    </>
);

export default AuthLayout;