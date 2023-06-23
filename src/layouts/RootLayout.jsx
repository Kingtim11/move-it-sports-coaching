import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="App">
            <main>
                <Outlet />
            </main>
            <Navbar />
        </div>
    )
}