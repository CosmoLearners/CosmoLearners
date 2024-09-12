import React, { useState } from 'react';
import FlippableCard from './FlippableCard';
import "./Features.css";
import featuresList from './Featurelist';


const Features = () => {
  const [areAllFlipped, setAreAllFlipped] = useState(false);
  const [flippedCards, setFlippedCards] = useState({});

  const toggleVisibility = () => {
    const newState = !areAllFlipped;
    setAreAllFlipped(newState);
    setFlippedCards(featuresList.reduce((acc, feature) => {
      acc[feature.id] = newState;
      return acc;
    }, {}));
  };

  const handleCardFlip = (id) => {
    setFlippedCards(prevState => ({
      ...prevState,
      [id]: !prevState[id],
    }));
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

      <button className="btn-1" onClick={toggleVisibility} role="button">{areAllFlipped ? 'Hide All' : 'Open All'}</button>

      <div className="features-flexbox">
        {featuresList.map((feature) => (
          <FlippableCard
            key={feature.id}
            front={feature.front}
            back={feature.back}
            isFlipped={flippedCards[feature.id] || areAllFlipped}
            onClick={() => handleCardFlip(feature.id)}
          />
        ))}
      </div>

    </section>
  );
};

export default Features;
