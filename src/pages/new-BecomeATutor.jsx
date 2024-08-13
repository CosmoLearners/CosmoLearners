import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import QualitiesGrid from "../components/QualitiesGrid";
import LearnMoreAboutCosmo from "../components/LearnMoreAboutCosmo";
import Footer from "../components/Footer";
import "./BecomeATutor.css";

const BecomeATutor = () => {
  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="become-a-tutor">
      <NavBar onNavBarClick={onNavBarClick} logo="/rectangle-47@2x.png" />
      <section className="learn-more-about-cosmo1">
        <h1 className="learn-more-about-container">
          <span className="learn-more-about-container1">
            <p className="empower-the-next">{`Empower the Next Generation `}</p>
            <p className="empower-the-next">Join Our Tutoring Family!</p>
          </span>
        </h1>
        <div className="at-cosmo-we2">
          At Cosmo, we believe in the transformative power of education. Our
          platform connects passionate educators with eager learners, ensuring
          growth for both. Join us in our mission to make quality education
          accessible to all.
        </div>
        <button className="divchakra-stack4">
          <div className="link6">
            <div className="button4">
              <div className="apply-today1">Apply Today</div>
            </div>
          </div>
        </button>
      </section>
      <WhatMakesUsDifferent />
      <section className="who-are-we-looking-for-parent">
        <h1 className="who-are-we">Who are we looking for?</h1>
        <QualitiesGrid />
      </section>
      <LearnMoreAboutCosmo
        propPadding="50px 20px"
        learnMoreAboutUs="Join Our Coaching Community"
        propWidth="870px"
        readyToBeTheArchitectOfYo="Are you ready to make a lasting impact in the world of education? At Cosmo, we’re not just teaching subjects; we’re shaping futures. We invite you to bring your expertise, enthusiasm, and unique teaching style to a team that values growth, innovation, and the power of knowledge. Come be a part of our mission to empower the next generation of thinkers and leaders. Join us now, and let’s inspire minds together."
        propWidth1="870px"
        startToday="Apply Today"
      />
      <Footer
        propWidth="1270px"
        propGap="70px 100px"
        propMinHeight="430px"
        cosmo12="/cosmo-1-22@2x.png"
        propGap1="20px"
        propFlex="unset"
        propMinWidth="162px"
        propWidth1="162px"
        propWidth2="1270px"
      />
    </div>
  );
};

export default BecomeATutor;
