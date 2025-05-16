import React from 'react';
import './NecrologieCard.css';

const NecrologieCard = ({ name, location, date, imageSrc }) => {
    return (
        <div className="necrologie-card">
            <div className="necrologie-content">
                <div className="necrologie-info">
                    <div className="necrologie-name">{name}</div>
                    <div className="necrologie-details">{location} {date}</div>
                </div>
                <div className="necrologie-image">
                    {imageSrc && <img src={imageSrc} alt={name} />}
                </div>
            </div>
        </div>
    );
};

export default NecrologieCard;