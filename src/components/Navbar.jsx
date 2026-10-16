import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FaBars, FaTimes } from 'react-icons/fa';

const whatWeOfferLinks = [
    { to: '/what-we-offer/#multi-skills-camp', label: 'Multi-skills Camp' },
    { to: '/what-we-offer/#multi-skills-club', label: 'Multi-skills Club' },
    { to: '/what-we-offer/#football', label: 'Football Club' },
    { to: '/what-we-offer/#dodgeball', label: 'Dodgeball Club' },
    { to: '/what-we-offer/#hockey', label: 'Hockey Club' },
    { to: '/what-we-offer/#birthday', label: 'Birthday Parties' },
];

export default function Navbar() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    function toggleNav() {
        setIsNavExpanded(!isNavExpanded);
    }

    function closeNav() {
        setIsNavExpanded(false);
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-icon')) {
                setIsNavExpanded(false);
            }
        }
        document.addEventListener('click', handleClickOutside);

        // Lock page scrolling while the mobile menu is open
        function handleResize() {
            if (window.innerWidth < 770 && isNavExpanded) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'visible';
            }
        }
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
                <button className="nav-icon" onClick={toggleNav} aria-label={isNavExpanded ? 'Close menu' : 'Open menu'}>
                    {isNavExpanded ? <FaTimes size="2em" color="#2e99d6" /> : <FaBars size="2em" color="#2e99d6" />}
                </button>
            </div>
            <div className={navMenuClassName}>
                <ul>
                    <li><Link to="/" onClick={closeNav}>Home</Link></li>
                    <li>
                        <Link to="/what-we-offer" onClick={closeNav}>What we Offer</Link>
                        <ul className="submenu">
                            {whatWeOfferLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <HashLink smooth to={to} onClick={closeNav}>{label}</HashLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li><Link to="/meet-the-team" onClick={closeNav}>Meet the team</Link></li>
                    <li><Link to="/bookings" onClick={closeNav}>Bookings</Link></li>
                    <li><HashLink smooth to="/#contact" onClick={closeNav}>Contact</HashLink></li>
                </ul>
            </div>
        </nav>
    );
}
