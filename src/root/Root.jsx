import React from 'react';
import Navbar from '../component/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import { Toaster } from 'react-hot-toast';



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
            <div>
                <Toaster></Toaster>
            </div>
        </div>
    );
};

export default Root;