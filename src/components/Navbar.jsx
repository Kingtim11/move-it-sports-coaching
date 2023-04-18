import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    return (
        <nav>
            <ul>
                <li className="current"><Link to="/">Home</Link></li>
                <li>
                    <Link to="/">What we offer</Link>
                    <ul>
                        <li><Link to="/">Holiday camp</Link></li>
                        <li><Link to="/">Dodgeball camp</Link></li>
                        <li><Link to="/">Birthday parties</Link></li>
                        <li>
                            <Link to="/">Team training</Link>
                            <ul>
                                <li><Link to="/">Lorem dolor</Link></li>
                                <li><Link to="/">Amet consequat</Link></li>
                                <li><Link to="/">Magna phasellus</Link></li>
                                <li><Link to="/">Etiam nisl</Link></li>
                                <li><Link to="/">Sed feugiat</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">one to one</Link></li>
                    </ul>
                </li>
                <li><Link to="/">Meet the team</Link></li>
                <li><Link to="/bookings">Bookings</Link></li>
                <li><Link to="/">Contact</Link></li>
            </ul>

        </nav>
        
    );
}

export default Navbar;