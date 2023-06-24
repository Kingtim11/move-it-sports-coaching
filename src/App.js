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

// https://www.pluralsight.com/guides/handling-react-routing-in-production

export default function App() {
  return (
    
        <RouterProvider router={router} />
      
    /*<div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
          <Route path="/bookings" element={<BookingPage />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>*/
  );
}
