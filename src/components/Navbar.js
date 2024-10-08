import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
 // Import Link from react-scroll
import './Navbar.css';
import logo from '../assets/logo.png'; 

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={sticky ? 'navbar sticky' : 'navbar'}>
             <div className="logo">
                <img src={logo} alt="Logo" className="navbar-logo" />  {/* Add the logo */}
            </div>
            <div className="menu-icon" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
                <li>
                    <Link
                        to="home" // Scroll to Home section
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu} // Close menu on click
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="about" // Scroll to About section
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu} // Close menu on click
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        to="services" // Scroll to Services section
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu} // Close menu on click
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        to="contact" // Scroll to Contact section
                        smooth={true}
                        duration={500}
                        onClick={toggleMenu} // Close menu on click
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
