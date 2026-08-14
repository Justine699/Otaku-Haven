import React, { useState, useEffect } from 'react';

export default function DaysCounter({ startDate }) {
  const [timeElapsed, setTimeElapsed] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const start = new Date(startDate).getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = now - start;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <section className="counter-section glass-card">
      <h2>Together For</h2>
      <div className="counter-grid">
        <div className="counter-box">
          <span className="count">{timeElapsed.days}</span>
          <span className="label">Days</span>
        </div>
        <div className="counter-box">
          <span className="count">{timeElapsed.hours}</span>
          <span className="label">Hours</span>
        </div>
        <div className="counter-box">
          <span className="count">{timeElapsed.minutes}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="counter-box">
          <span className="count">{timeElapsed.seconds}</span>
          <span className="label">Seconds</span>
        </div>
      </div>
    </section>
  );
}
