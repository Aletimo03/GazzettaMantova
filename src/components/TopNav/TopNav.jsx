import React, { useState, useEffect, useRef } from 'react';
import './TopNav.css';
import {
    FaBars,
    FaYoutube,
    FaFacebookF,
    FaInstagram,
    FaXTwitter,
    FaWhatsapp,
} from 'react-icons/fa6';
import { FaRegNewspaper } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import logoUrl from '../../assets/topnav-logo.png';

const TopNav = () => {
    const navRef = useRef(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    useEffect(() => {
        const navElement = navRef.current;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            navElement.style.position = scrollTop === 0 ? 'absolute' : 'fixed';
            navElement.style.top = '0';
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="top-nav-container" ref={navRef}>
            <div className="top-bar">
                <div className="top-bar-container">
                    <div className="top-bar-left">
                        <button className="menu-toggle" onClick={openSidebar} aria-label="Apri menu">
                            <FaBars />
                        </button>

                        <div className="logo-small">
                            <img src={logoUrl} alt="Gazzetta di Mantova" />
                        </div>

                        <div className="top-nav-links">
                            <ul>
                                <li>
                                    <a href="#">
                                        <span className="icon"><FaRegNewspaper /></span> Edizione digitale
                                    </a>
                                </li>

                                <li>
                                    <div className="dot-divider">
                                        {Array.from({ length: 7 }).map((_, i) => (
                                            <div key={i} className="dot"></div>
                                        ))}
                                    </div>
                                    <a href="#">
                                        <span className="icon"><MdOutlineMailOutline /></span> Newsletter
                                    </a>
                                </li>

                                <li>
                                    <div className="dot-divider">
                                        {Array.from({ length: 7 }).map((_, i) => (
                                            <div key={i} className="dot"></div>
                                        ))}
                                    </div>
                                    <a href="#">
                                        <span className="icon"><FaWhatsapp /></span> Segnala
                                    </a>
                                </li>

                                <li>
                                    <div className="dot-divider">
                                        {Array.from({ length: 7 }).map((_, i) => (
                                            <div key={i} className="dot"></div>
                                        ))}
                                    </div>
                                    <a href="#">Necrologie</a>
                                </li>

                                <li>
                                    <div className="dot-divider">
                                        {Array.from({ length: 7 }).map((_, i) => (
                                            <div key={i} className="dot"></div>
                                        ))}
                                    </div>
                                    <a href="#">Accedi</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="top-right">
                        <div className="social-icons">
                            <a href="#" aria-label="Youtube"><FaYoutube /></a>
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="Twitter"><FaXTwitter /></a>
                        </div>
                        <button className="subscribe-btn" aria-label="Abbonati">Abbonati</button>
                    </div>
                </div>
            </div>

            <SidebarMenu isOpen={isSidebarOpen} onClose={closeSidebar} />
        </nav>
    );
};

export default TopNav;
