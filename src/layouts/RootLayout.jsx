import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';

export default function RootLayout() {
    return (
        <main>
            <ScrollToTop />
            <Outlet />
            <Navbar />
        </main>
    );
}
