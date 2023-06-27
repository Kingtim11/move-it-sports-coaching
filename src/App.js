import './App.css';
import { 
  Route, 
  RouterProvider, 
  createBrowserRouter, 
  createRoutesFromElements 
} from 'react-router-dom';
import Home from '../src/pages/HomePage';
import BookingPage from '../src/pages/BookingPage';
import WhatWeOfferPage from './pages/WhatWeOfferPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
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
