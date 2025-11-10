import React from 'react';
import Navbar from '../component/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';



const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Root;