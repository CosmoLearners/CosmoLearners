import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar1 from "../components/NavBar1";
import NavBar from "../components/NavBar"
import MathFrame from "../components/MathFrame.js";
import ProgrammingFrame  from "../components/ProgrammingFrame.js";
import Footer from "../components/Footer-main";
import "./Courses.css";

const Courses = () => {
  const navigate = useNavigate();

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
    <div className="courses">
      { <NavBar/>}
      {/* <NavBar1
        onLinkABOUTClick={onLinkABOUTClick}
        onLinkCOURSESClick={onLinkCOURSESClick}
        onLinkPARENTSClick={onLinkPARENTSClick}
        onLinkBECOMEClick={onLinkBECOMEClick}
        onLinkContainerClick={onLinkContainerClick}
      /> */}
      <section className="learn-more-about-cosmo5">
        <b className="learn-more-about4">Courses</b>
        <div className="at-cosmo-we2">
          At COSMO, we offer a diverse range of courses designed to inspire,
          educate, and empower learners of all ages. Whether you're a budding
          programmer or eager to explore the depths of mathematics, our courses
          are tailored to help you reach for the stars in your educational
          journey.
        </div>
      </section>
      <ProgrammingFrame  />
      <MathFrame />
      <Footer />
      {/* <Footer
        cosmo12="/cosmo-1-23@2x.png"
        ceb5d14e108cfa7e8f1779Pri="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp2@2x.png"
        propAlignSelf="stretch"
        propPosition="unset"
        propTop="unset"
        propLeft="unset"
        propWidth="unset"
        propWidth1="1350px"
        propPadding="0px 0.2px"
        propWidth2="1350px"
        propPadding1="0px var(--padding-166xl-8)"
      /> */}
    </div>
  );
};

export default Courses;
