import React from 'react';
import {CarForm} from "../components/CarForm";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <CarForm/>
            <Outlet/>
        </div>
    );
};

export {MainLayout}