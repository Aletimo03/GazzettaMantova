import React from 'react';
import './NewsStrip.css';
import NewsCard from "../NewsCard/NewsCard.jsx";

const NewsStrip = ({ title, backgroundColor, titleColor, cards = [] }) => {
    return (
        <div className="news-strip-wrapper" style={{ backgroundColor }}>
            {title && (
                <h2 className="news-strip-title" style={{ color: titleColor }}>
                    {title}
                </h2>
            )}
            <div className="news-strip">
                {cards.map((card, index) => (
                    <NewsCard
                        key={index}
                        image={card.image}
                        skewedTitle={card.skewedTitle}
                        category={card.category}
                        subtitle={card.subtitle}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewsStrip;
