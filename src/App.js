import './App.css';
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from '../src/pages/HomePage';
import Navbar from '../src/components/Navbar';
import BookingPage from '../src/pages/BookingPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import ScrollToTop from './components/ScrollToTop';
import RootLayout from './layouts/RootLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
            <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
            <Route path="/bookings" element={<BookingPage />} />
          </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
