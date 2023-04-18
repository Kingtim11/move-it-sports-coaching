import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/HomePage';
import Navbar from '../src/components/Navbar';
import BookingPage from '../src/pages/BookingPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookings' element={<BookingPage />} />
        
        </Routes>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
