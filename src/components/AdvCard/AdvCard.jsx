import React from 'react';
import './AdvCard.css';

const AdvCard = ({ imageSrc, title, subtitle }) => {
    return (
        <div className="adv-card">
            <div className="adv-card-inner">
                <img src={imageSrc} alt="Visual" className="adv-card-image" />
                {(title || subtitle) && (
                    <div className="adv-card-content">
                        {title && <h3 className="adv-card-title">{title}</h3>}
                        {subtitle && <p className="adv-card-subtitle">{subtitle}</p>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdvCard;

