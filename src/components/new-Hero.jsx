import PropTypes from "prop-types";
import "./new-Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <div className="hero-content">
        <h1 className="the-first-step-container">
          <p className="the-first-step">
            THE FIRST STEP INTO YOUR COSMIC TECH JOURNEY
          </p>
          <p className="starts-here">STARTS HERE</p>
        </h1>
        <div className="discover-personalized-programm">
          Discover personalized programming lessons taught by industry
          professionals.
        </div>
        <div className="divchakra-stack8">
          <div className="link11">
            <div className="button8">
              <div className="start-learning">Start Learning</div>
            </div>
          </div>
        </div>
      </div>
      <div className="scholar-kid-2-parent">
        <img className="scholar-kid-2-icon" alt="" src="/scholarkid-2@2x.png" />
        <div className="astro-dude-platform-1">
          <div className="top-down-grad" />
          <div className="left-right-grad" />
          <div className="top-left-linear-grad" />
          <div className="top-right-linear-grad" />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
