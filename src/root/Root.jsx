import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';
import MainLayout from '../component/MainLayout';
import ThemeController from '../component/ThemeController';



const Root = () => {
    return (
        <div>
            <ThemeController />
            <MainLayout />
            <div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Root;