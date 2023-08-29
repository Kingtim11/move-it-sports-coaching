import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function NavMenuItem({ to, children, onClick }) {
        return (
            <li>
                <Link to={to} onClick={onClick}>
                    {children}
                </Link>
            </li>
        );
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-icon')) {
                document.body.setAttribute('id', 'nav-menu');
                setIsNavExpanded(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        // Add event listener for screen width and navbar expansion
        function handleScreenWidth() {
            if (window.innerWidth < 1200 && isNavExpanded) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'visible';
            }
        }
        // Call the handleScreenWidth initially and whenever isNavExpanded changes
        handleScreenWidth();
        window.addEventListener('resize', handleScreenWidth);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleScreenWidth);
        };
    }, [isNavExpanded]);

    function handleClick() {
        setIsNavExpanded(!isNavExpanded);
        //document.body.setAttribute('id', isNavExpanded ? 'nav-menu' : 'nav-expanded');
    }

    const navMenuClassName = isNavExpanded ? 'nav-menu expanded' : 'nav-menu';

    return (
        <nav className="navigation">
            <div className="nav-button-container">
                <button className="nav-icon" onClick={handleClick}>
                    <FontAwesomeIcon icon={isNavExpanded ? faTimes : faBars} size="2xl" color="#2e99d6" />
                </button>
            </div>
            <div className={navMenuClassName}>
                <ul>
                    <NavMenuItem to="/" onClick={handleClick}>Home</NavMenuItem>
                    
                    <NavMenuItem to="/what-we-offer" onClick={handleClick}>What we Offer
                        <ul className='submenu'>
                            <li>
                                <HashLink 
                                    smooth to="/what-we-offer/#multi-skills" 
                                    onClick={handleClick}>
                                    Multi-skills Camp
                                </HashLink>
                            </li>
                            <li>
                                <HashLink 
                                    smooth to="/what-we-offer/#dodgeball" 
                                    onClick={handleClick}>
                                    Dodgeball Club
                                </HashLink>
                            </li>
                            <li>
                                <HashLink 
                                    smooth to="/what-we-offer/#birthday" 
                                    onClick={handleClick}>
                                    Birthday Parties
                                </HashLink>
                            </li>
                        </ul>
                    </NavMenuItem>
                

                    <NavMenuItem to="/meet-the-team" onClick={handleClick}>Meet the team</NavMenuItem>
                    <NavMenuItem to="/bookings" onClick={handleClick}>Bookings</NavMenuItem>
                    <li>
                        <HashLink
                            smooth to="/#contact"
                            onClick={handleClick}>
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}