import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function NavMenuItem({ to, children, onClick }) {
    return (
        <li>
            <Link to={to} onClick={onClick}>
                {children}
            </Link>
        </li>
    );
}

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function handleClick() {
        setIsNavExpanded(!isNavExpanded);
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
        function handleResize() {
            if (window.innerWidth < 770 && isNavExpanded) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'visible';
            }
        }
        // Call the handleResize initially and whenever isNavExpanded changes
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            document.removeEventListener('click', handleClickOutside);
            window.removeEventListener('resize', handleResize);
        };
    }, [isNavExpanded]);

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
                                    smooth to="/what-we-offer/#multi-skills-camp" 
                                    onClick={handleClick}>
                                    Multi-skills Camp
                                </HashLink>
                            </li>
                            <li>
                                <HashLink 
                                    smooth to="/what-we-offer/#multi-skills-club" 
                                    onClick={handleClick}>
                                    Multi-skills Club
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
                                    smooth to="/what-we-offer/#hockey" 
                                    onClick={handleClick}>
                                    Hockey Club
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