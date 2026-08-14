import React, { useState, useRef } from 'react';

export default function InteractiveNote({ audioSrc }) {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  const handleOpenEnvelope = () => {
    setIsOpen(true);
    
    // Play background music when envelope is opened
    if (audioRef.current) {
      audioRef.current.play().catch(err => console.log("Audio play deferred:", err));
    }
  };

  return (
    <section className="secret-note-section">
      {/* Audio element for background music */}
      <audio ref={audioRef} src={audioSrc} loop />

      <div className="container">
        <h2>A Special Message For You</h2>
        <p className="sub-heading">Click the envelope to unlock your anniversary surprise</p>
        
        <div className={`envelope-card glass-card ${isOpen ? 'open' : ''}`}>
          {!isOpen ? (
            <div className="envelope-closed" onClick={handleOpenEnvelope}>
              <span className="envelope-icon">✉️</span>
              <p className="tap-text">Tap to Open Envelope 💖</p>
            </div>
          ) : (
            <div className="envelope-open">
              <span className="heart-icon">💖</span>
              <h1 className="short-message">HAPPY 1ST ANNIVERSARY</h1>
              <p className="playing-status">🎶 Playing our special song...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
