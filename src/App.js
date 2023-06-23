import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/HomePage';
import Navbar from '../src/components/Navbar';
import BookingPage from '../src/pages/BookingPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/what-we-offer" element={<WhatWeOfferPage />} />
          <Route path="/meet-the-team" element={<MeetTheTeamPage />} />
          <Route path="/bookings" element={<BookingPage />} />
          </Route>
        </Routes>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}
