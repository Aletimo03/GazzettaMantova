import React from 'react';
import './NewsCard.css';

const NewsCard = ({ image, skewedTitle, category, subtitle }) => {
    return (
        <div className="news-card">
            <div className="news-image-wrapper">
                <img
                    className="news-image"
                    src={image}
                    alt={subtitle || "News image"}
                />
                {skewedTitle && (
                    <div className="skewed-title-container">
                        <div className="skewed-title">{skewedTitle}</div>
                    </div>
                )}
            </div>
            <div className="news-content">
                {category && (
                    <span className="news-category">
                        <span className="slashes">///</span> {category}
                    </span>
                )}
                {subtitle && (
                    <p className="news-subtitle">{subtitle}</p>
                )}
            </div>
        </div>
    );
};

export default NewsCard;
