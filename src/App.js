import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/HomePage';
import Navbar from '../src/components/Navbar';
import BookingPage from '../src/pages/BookingPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/what-we-offer' element={<WhatWeOfferPage />} />
          <Route path='/meet-the-team' element={<MeetTheTeamPage />} />
          <Route path='/bookings' element={<BookingPage />} />
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}
