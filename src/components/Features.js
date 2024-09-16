import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';
import featuresList from './Featurelist';

const Features = () => {
  const [expandedCardId, setExpandedCardId] = useState([]);

  // Toggle individual cards
  const handleCardClick = (cardId) => {
    if (expandedCardId.includes(cardId)) {
      setExpandedCardId(expandedCardId.filter(id => id !== cardId));
    } else {
      setExpandedCardId([...expandedCardId, cardId]);
    }
  };

  // Toggle visibility of all cards
  const toggleVisibility = () => {
    if (expandedCardId.length === featuresList.length) {
      // If all cards are expanded, collapse them
      setExpandedCardId([]);
    } else {
      // Otherwise, expand all cards
      setExpandedCardId(featuresList.map(feature => feature.id));
    }
  };

  return (
    <section className="features">
      <div className="wrapper-progress-icon">
        <img
          className="progress-icon"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <h1 className="features-unlocking-cosmic">
        Features: Unlocking Cosmic Potential 🚀
      </h1>

      <button className="btn-1" onClick={toggleVisibility} role="button">
        {expandedCardId.length === featuresList.length ? 'Hide All' : 'Open All'}
      </button>

      <div className="features-flexbox">
        {featuresList.map((feature) => (
          <FeatureCard
            key={feature.id}
            id={feature.id}
            front={feature.front}
            expand={feature.expand}
            isExpanded={expandedCardId.includes(feature.id)} // Check if card is expanded
            onClick={() => handleCardClick(feature.id)} // Handle individual card clicks
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
