import React from 'react';
import './NewsStrip.css';
import NewsCard from "../NewsCard/NewsCard.jsx";

const NewsStrip = ({ title, backgroundColor , titleColor }) => {
    return (
        <div className="news-strip-wrapper" style={{ backgroundColor }}>
            <h2 className="news-strip-title" style={{ color: titleColor }}>{title}</h2>
            <div className="news-strip">
                <NewsCard />
                <NewsCard />
                <NewsCard />
                <NewsCard />
            </div>
        </div>
    );
};

export default NewsStrip;
