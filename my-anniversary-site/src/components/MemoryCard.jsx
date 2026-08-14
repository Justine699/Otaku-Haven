import React, { useState } from 'react';

export default function MemoryCard({ image, title, date, description }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="gallery-card glass-card">
      <div className="image-wrapper">
        <img src={image} alt={title} />
        <button 
          className={`like-btn ${liked ? 'liked' : ''}`} 
          onClick={() => setLiked(!liked)}
        >
          {liked ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-info">
        <span className="memory-date">{date}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
