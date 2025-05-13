import React from 'react';
import './AsideCard.css';

const AsideCard = ({ image, category, title }) => {
    return (
        <div className="aside-card">
            <div className="aside-card-content">
                <div className="aside-card-image">
                    <img src={image} alt="Aside preview" />
                </div>
                <div className="aside-card-text">
                    <div className="aside-card-category">
                        <span className="slashes">///</span> {category}
                    </div>
                    <div className="aside-card-title">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsideCard;
