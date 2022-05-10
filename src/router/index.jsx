import React, {useReducer} from 'react';
import '../styles/index.scss';
import {Navigate, Route, Routes} from "react-router-dom";
import Login from "../pages/login/index";
import LoginCode from "../pages/login-code/index";
import Dashboard from '../pages/admin/dashboard/index';
import MyProfile from "../pages/admin/my-profile/index";
import AuthLayout from "../layouts/AuthLayout";
import PageLayout from "../layouts/PageLayouts";
import AuthStateContext from "../contexts/auth";
import {AuthReducer, initialState} from "../reducers/auth";

export default function Index() {
    const [user, dispatch] = useReducer(AuthReducer, initialState);
    return (
        <div>
            <AuthStateContext.Provider value={{user,dispatch}}>
            <Routes>
                <Route path="/login" element={<AuthLayout/>}>
                    <Route path="/login" element={<Login/>}/>
                </Route>
                <Route path="/login-code" element={<AuthLayout/>}>
                    <Route path="/login-code" element={<LoginCode/>}/>
                </Route>
                <Route path="/dashboard" element={<PageLayout/>}>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                </Route>
                <Route path="/my-profile" element={<PageLayout/>}>
                    <Route path="/my-profile" element={<MyProfile/>}/>
                </Route>
                <Route path="*" element={<Navigate replace to="/login"/>}/>
            </Routes>
            </AuthStateContext.Provider>
        </div>
    );
}