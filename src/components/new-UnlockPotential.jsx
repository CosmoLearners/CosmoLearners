import PropTypes from "prop-types";
import "./new-UnlockPotential.css";

const UnlockPotential = ({ className = "" }) => {
  return (
    <section className={`unlock-potential ${className}`}>
      <div className="unlock-your-potential">
        <img
          className="cosmo-jupiter-1-icon"
          loading="lazy"
          alt=""
          src="/cosmo-jupiter-1@2x.png"
        />
        <div className="learn-more-about-us-group">
          <h1 className="learn-more-about5">Unlock Your Learning Potential</h1>
          <div className="welcome-to-cosmo2">
            Welcome to Cosmo, where your educational journey is as unique as you
            are! We believe that learning is a personal adventure, and with the
            guidance of our expert Coaches, your path to knowledge is limitless.
            Dive into subjects that fascinate you, tackle challenges with
            confidence, and build skills that will last a lifetime. Whether it’s
            mastering the mysteries of mathematics, coding your first app, or
            exploring the frontiers of AI, we're here to support you every step
            of the way. Get ready to learn, grow, and succeed with us!
          </div>
          <button className="divchakra-stack6">
            <div className="link9">
              <div className="button6">
                <div className="start-today">Start Today</div>
              </div>
            </div>
          </button>
        </div>
        <img
          className="cosmo-rocket-1-icon"
          loading="lazy"
          alt=""
          src="/cosmo-rocket-1@2x.png"
        />
      </div>
    </section>
  );
};

UnlockPotential.propTypes = {
  className: PropTypes.string,
};

export default UnlockPotential;
