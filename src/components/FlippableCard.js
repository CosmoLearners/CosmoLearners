import React, { useState } from 'react';
import "./Features.css";

const FlippableCard = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`single-feature ${isFlipped ? 'flipped' : ''}`} 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="front">
        {front}
      </div>
      <div className="back">
        {back}
      </div>
    </div>
  );
};

export default FlippableCard;
