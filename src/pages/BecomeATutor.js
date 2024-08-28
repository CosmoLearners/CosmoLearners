import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import CoachContainer from "../components/CoachContainer";
import CoachTestimonies from "../components/CoachTestimonies";
import CollegesList from "../components/CollegesList";
import Footer from "../components/Footer-main";
import "./BecomeATutor.css";


const BecomeATutor = () => {

  const COACH_APPLICATION_LINK = "https://www.indeed.com/cmp/Cosmo-Scholar/jobs/"; 

  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLinkABOUTClick = useCallback(() => {
    navigate("/aboutus");
  }, [navigate]);

  const onLinkCOURSESClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  const onLinkPARENTSClick = useCallback(() => {
    navigate("/why-cosmo");
  }, [navigate]);

  const onLinkBECOMEClick = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  const onLinkContainerClick = useCallback(() => {
    // Please sync "Signup" to the project
  }, []);

  return (
    <div className="become-a-tutor">
      { <NavBar />}
      <section className="learn-more-about-cosmo">
        <h1 className="learn-more-about-container">
          <span className="learn-more-about-container1">
            <p className="empower-the-next">Empower the Next Generation </p>

            <p className="join-our-tutoring">Join Our Tutoring Family!</p>
          </span>
        </h1>
        <div className="at-cosmo-we">
          At Cosmo, we believe in the transformative power of education. Our
          platform connects passionate educators with eager learners, ensuring
          growth for both. Join us in our mission to make quality education
          accessible to all.
        </div>
        <button className="divchakra-stack">
          <div className="link">
            <div className="button">
              <Link to={COACH_APPLICATION_LINK} target="_blank" ><div className="apply-today" >Apply Today</div> </Link>

            </div>
          </div>
        </button>
      </section>
      <WhatMakesUsDifferent />
      <CoachContainer />

      {/* <section className="mission">
        <button className="divchakra-stack">
          <div className="link">
            <div className="button">
              <div className="apply-today">Apply Today</div>
            </div>
          </div>
        </button>
      </section> */}
      <section className="learn-more-about-cosmo1">
        <h1 className="learn-more-about">Join Our Coaching Community</h1>
        <div className="are-you-ready">
          Are you ready to make a lasting impact in the world of education? At
          Cosmo, we’re not just teaching subjects; we’re shaping futures. We
          invite you to bring your expertise, enthusiasm, and unique teaching
          style to a team that values growth, innovation, and the power of
          knowledge. Come be a part of our mission to empower the next
          generation of thinkers and leaders. Join us now, and let’s inspire
          minds together.
        </div>
        <button className="divchakra-stack">
          <div className="link">
            <div className="button">
              <Link to={COACH_APPLICATION_LINK} target="_blank" ><div className="apply-today" >Apply Today</div> </Link>
            </div>
          </div>
        </button>
        {/* <button className="divchakra-stack2">
          <div className="link2">
            <div className="button2">
              <div className="apply-today2">Apply Today</div>
            </div>
          </div>
        </button> */}
      </section>
      <Footer
        cosmo12="/cosmo-1-2@2x.png"
        ceb5d14e108cfa7e8f1779Pri="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp@2x.png"
      />
    </div>
  );
};

export default BecomeATutor;
