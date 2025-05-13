import React from 'react';
import './MainHeader.css';
import logoUrl from '../../assets/logogazzetta.png';
import { FaCloudSun } from 'react-icons/fa';

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
    const otherCategories = ['SPETTACOLI', 'CULTURA', 'VIDEO', 'ITALIA', 'CINEMA'];

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
                    <div className="date">
                        venerdì, 25 aprile 2025
                    </div>
                </div>

                <div className="nav-line" />

                <div className="category-nav">
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
                <div className="nav-underline" />
            </div>
        </div>
    );
};

export default MainHeader;
