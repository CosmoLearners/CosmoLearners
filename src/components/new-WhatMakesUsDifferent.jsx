import CompetitiveCompensation from "./new-CompetitiveCompensation";
import PropTypes from "prop-types";
import "./new-WhatMakesUsDifferent.css";

const WhatMakesUsDifferent = ({ className = "" }) => {
  return (
    <section className={`what-makes-us-different ${className}`}>
      <div className="different-heading-wrapper">
        <h1 className="what-makes-us">What Makes Us Different?</h1>
      </div>
      <div className="features-grid">
        <CompetitiveCompensation
          oneOnOne1="/oneonone-16@2x.png"
          competitiveCompensation="Competitive Compensation"
          earnWhatYouDeserveOurCoac="Earn what you deserve. Our Coaches enjoy competitive pay that reflects their valuable contribution to our learning community and rewards them for their commitment to educational excellence."
        />
        <CompetitiveCompensation
          propHeight="487px"
          propAlignSelf="unset"
          propWidth="284px"
          oneOnOne1="/oneonone-1-1@2x.png"
          competitiveCompensation="State-of-the-Art Resources"
          propAlignSelf1="unset"
          propWidth1="322px"
          earnWhatYouDeserveOurCoac="Teach with the best. We provide our Coaches with access to the latest educational tools and resources, ensuring you have everything at your fingertips to deliver an unparalleled learning experience."
          propHeight1="186px"
        />
        <CompetitiveCompensation
          propHeight="487px"
          propAlignSelf="unset"
          propWidth="284px"
          oneOnOne1="/oneonone-1-2@2x.png"
          competitiveCompensation="Purpose-Driven Platform"
          propAlignSelf1="unset"
          propWidth1="322px"
          earnWhatYouDeserveOurCoac="Shape future innovators. Join a team that's dedicated to nurturing the next generation through a goal-oriented platform that values growth, innovation, and the long-term development of every student we serve"
          propHeight1="186px"
        />
      </div>
    </section>
  );
};

WhatMakesUsDifferent.propTypes = {
  className: PropTypes.string,
};

export default WhatMakesUsDifferent;
