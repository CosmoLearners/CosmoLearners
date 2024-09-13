import React, { useState } from 'react';
import FeatureCard from './FeatureCard';
import './Features.css';
import featuresList from './Featurelist';

const Features = () => {
  const [expandedCardId, setExpandedCardId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedCardId(expandedCardId === id ? null : id); // 클릭한 카드가 이미 열려 있으면 닫기
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

      <div className="features-flexbox">
        {featuresList.map((feature) => (
          <FeatureCard
            key={feature.id}
            id={feature.id}
            front={feature.front}
            expand={feature.expand}
            isExpanded={expandedCardId === feature.id} 
            onClick={() => handleCardClick(feature.id)} 
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
