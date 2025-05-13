import React from 'react';
import './NewsCard.css';

const NewsCard = () => {
    return (
        <div className="news-card">
            <div className="news-image-wrapper">
                <img
                    className="news-image"
                    src="https://placehold.co/220x123"
                    alt="Crowd in Piazza San Pietro"
                />
            </div>
            <div className="news-content">
                 <span className="news-category">
                        <span className="slashes">///</span> I FUNERALI DEL PONTEFICE
                    </span>
                <p className="news-subtitle">
                    In piazza San Pietro squadre di soccorso mantovane e oltre 60 ragazzi partiti da Viadana
                </p>
            </div>
        </div>
    );
};

export default NewsCard;