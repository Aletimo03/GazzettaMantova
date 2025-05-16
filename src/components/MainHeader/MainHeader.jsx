import React, { useRef, useEffect, useState } from 'react';
import './MainHeader.css';
import logoUrl from '../../assets/logogazzetta.png';
import { FaCloudSun, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const WeatherWidget = ({ temperature, location }) => (
    <div className="weather-widget">
        <FaCloudSun className="weather-icon" />
        <div className="weather-info">
            <span className="temperature">{temperature}°</span>
            <span className="location">{location}</span>
        </div>
    </div>
);

const MainHeader = () => {
    const otherCategories = ['SPETTACOLI', 'CULTURA', 'VIDEO', 'ITALIA', 'CINEMA', 'SPORT'];
    const categoryNavRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScroll = () => {
        if (categoryNavRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = categoryNavRef.current;
            setCanScrollLeft(scrollLeft > 5);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
        }
    };

    useEffect(() => {
        const navElement = categoryNavRef.current;
        if (navElement) {
            checkScroll();
            navElement.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return () => {
                navElement.removeEventListener('scroll', checkScroll);
                window.removeEventListener('resize', checkScroll);
            };
        }
    }, []);

    const scrollLeft = () => {
        if (categoryNavRef.current) {
            categoryNavRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (categoryNavRef.current) {
            categoryNavRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    return (
        <div className="main-header">
            <div className="main-header-container">
                <div className="top-header">
                    <div className="temperature">
                        <WeatherWidget temperature={12} location="Mantova" />
                    </div>
                    <div className="main-logo">
                        <img src={logoUrl} alt="Test Logo" />
                    </div>
                    <div className="date">venerdì, 25 aprile 2025</div>
                </div>

                <div className="nav-line" />

                <div className="category-nav-wrapper">
                    <div className="category-nav" ref={categoryNavRef}>
                        <span className="category-button green">
                            <span className="icon">★</span> VOTA PALLONE D’ORO
                        </span>
                        <span className="category">
                            <span className="slashes">///</span> CRONACA
                        </span>
                        <span className="category-button red">
                            <span className="icon">★</span> MANTOVA CALCIO
                        </span>
                        {otherCategories.map((category, index) => (
                            <span key={index} className="category">
                                <span className="slashes">///</span> {category}
                            </span>
                        ))}
                    </div>

                    {/* Overlay buttons: always rendered, just faded when inactive */}
                    <div
                        className={`scroll-overlay left ${canScrollLeft ? 'active' : ''}`}
                        onClick={canScrollLeft ? scrollLeft : undefined}
                    >
                        <FaChevronLeft className="scroll-arrow" />
                    </div>
                    <div
                        className={`scroll-overlay right ${canScrollRight ? 'active' : ''}`}
                        onClick={canScrollRight ? scrollRight : undefined}
                    >
                        <FaChevronRight className="scroll-arrow" />
                    </div>
                </div>

                <div className="nav-underline" />
            </div>
        </div>
    );
};

export default MainHeader;
