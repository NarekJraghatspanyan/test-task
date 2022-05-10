import {Outlet} from "react-router-dom";
import React from "react";
import Drawer from '../pages/admin/Drawer';

const PageLayout = () => (
    <div id="page-layout">
        <Outlet />
        <Drawer />
    </div>
);

export default PageLayout;