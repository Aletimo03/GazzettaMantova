import React from 'react';
import './Article.css'; // Import the updated CSS

const Article = ({ preview, author, image }) => {
    return (
        <div className="article">
            <div className="article-image-container">
                {image ? (
                    <img src={image} alt="Article" className="article-image" />
                ) : (
                    <div className="article-placeholder" />
                )}
            </div>
            <div className="article-content">
                <h2 className="article-title">{preview}</h2>
                {author && <p className="article-author">di {author}</p>}
            </div>
        </div>
    );
};

export default Article;
