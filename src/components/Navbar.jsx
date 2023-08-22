import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css';

export default function Navbar() {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-icon')) {
                document.body.setAttribute('id', 'nav-menu');
                setIsNavExpanded(false);
            }
        }
        document.addEventListener('click', handleClickOutside)
        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, []);
    
    function handleClick() {
        setIsNavExpanded(!isNavExpanded);
        if (!isNavExpanded) {
            document.body.setAttribute('id', 'nav-expanded');
          } else {
            document.body.setAttribute('id', 'nav-menu');  
          }
    }

    const navMenuClassName = isNavExpanded ? 'nav-menu expanded' : 'nav-menu';
    
    return (
        
            <nav className='navigation'>   
                <div className='nav-button-container'>
                    <button className='nav-icon' onClick={handleClick}>
                        <FontAwesomeIcon  icon={faBars} size='2xl' color='#2e99d6' />
                    </button>
                </div>
                    
                    <div className={navMenuClassName}>
                    <ul>
                        <li className="current"><Link to="/" onClick={handleClick}>Home</Link></li>
                        <li><Link to="/what-we-offer" onClick={handleClick}>What we Offer</Link></li>
                        <li><Link to="/meet-the-team" onClick={handleClick}>Meet the team</Link></li>
                        <li><Link to="/bookings" onClick={handleClick}>Bookings</Link></li>
                        <li>
                            <HashLink 
                                smooth to="/#contact" 
                                scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} 
                                onClick={handleClick}
                                >
                                Contact
                            </HashLink>
                        </li>
                    </ul>
                </div>
            </nav>
        
    );
}