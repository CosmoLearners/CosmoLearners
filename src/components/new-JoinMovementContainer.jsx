import PropTypes from "prop-types";
import "./new-JoinMovementContainer.css";

const JoinMovementContainer = ({ className = "" }) => {
  return (
    <div className={`join-movement-container ${className}`}>
      <img
        className="join-movement-container-child"
        loading="lazy"
        alt=""
        src="/frame-31@2x.png"
      />
      <div className="movement-content">
        <b className="heading-22">
          Join COSMO today and embark on a cosmic learning adventure like no
          other. Together, we'll reach for the stars and unlock your full
          potential!
        </b>
        <div className="divchakra-stack16">
          <button className="link-button1">
            <div className="start-learning-now">Start Learning Now</div>
          </button>
          <div className="linkmargin">
            <button className="link-button2">
              <div className="become-a-tutor1">Become a Tutor</div>
            </button>
          </div>
          <div className="linkmargin">
            <button className="link-button2">
              <div className="for-parents">For Parents</div>
            </button>
          </div>
        </div>
      </div>
      <div className="image-container">
        <div className="cloudlargerightsvg">
          <img className="cloud-icon" alt="" src="/vector-1.svg" />
        </div>
        <img
          className="rocket-clipart-1-icon"
          loading="lazy"
          alt=""
          src="/rocketclipart-1@2x.png"
        />
      </div>
    </div>
  );
};

JoinMovementContainer.propTypes = {
  className: PropTypes.string,
};

export default JoinMovementContainer;
