import React from 'react';
import Navbar from '../nav&foot/navbar';

import { Outlet } from 'react-router';
import Footer from '../nav&foot/Footer';

const MainLaout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLaout;