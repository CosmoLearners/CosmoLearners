import On from "./On";
import "./WhatMakesUsDifferent.css";

const WhatMakesUsDifferent = () => {
  return (
    <section className="what-makes-us-different">
      <div className="difference-header">
        <h1 className="what-makes-us">What Makes Us Different?</h1>
      </div>
      <div className="feature-cards">
        <On
          earnWhatYouDeserveOurCoac="Earn what you deserve. Our Coaches enjoy competitive pay that reflects their valuable contribution to our learning community and rewards them for their commitment to educational excellence."
          competitiveCompensation="Competitive Compensation"
        />
        <div className="feature-card">
          <On
            earnWhatYouDeserveOurCoac="Teach with the best. We provide our Coaches with access to the latest educational tools and resources, ensuring you have everything at your fingertips to deliver an unparalleled learning experience."
            competitiveCompensation="State-of-the-Art Resources"
            propHeight="unset"
            propHeight1="487px"
            propHeight2="186px"
            propMarginTop="unset"
          />
        </div>
        <div className="feature-card1">
          <On
            earnWhatYouDeserveOurCoac="Shape future innovators. Join a team that's dedicated to nurturing the next generation through a goal-oriented platform that values growth, innovation, and the long-term development of every student we serve"
            competitiveCompensation="Purpose-Driven Platform"
            propHeight="unset"
            propHeight1="487px"
            propHeight2="186px"
            propMarginTop="unset"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatMakesUsDifferent;
