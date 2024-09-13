import React from 'react';
import './Features.css';

const FeatureCard = ({ id, front, expand, isExpanded, onClick }) => {
  return (
    <div
      className={`single-feature ${isExpanded ? 'expanded' : ''}`} 
      onClick={onClick}
    >
      <div className="feature-front">
        {front}
      </div>
      <div className={`feature-text-box ${isExpanded ? 'show' : ''}`}>
        {expand}
      </div>
    </div>
  );
};

export default FeatureCard;
