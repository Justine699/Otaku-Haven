import React from 'react';

export default function Hero({ onExploreClick }) {
  return (
    <header className="hero">
      <div className="hero-content">
        <span className="badge"> 1st Anniversary Special </span>
        <h1>Our Love Story</h1>
        <p>A simple space dedicated to celebrating our 365 days together.</p>
        <button className="cta-btn" onClick={onExploreClick}>
          Explore Memories 💖
        </button>
      </div>
    </header>
  );
}
