import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import UnlockPotential from "../components/new-UnlockPotential";
import Personalized1 from "../components/new-Personalized1";
import CoachTestimonies from "../components/CoachTestimonies";
import CoachContainer from "../components/CoachContainer";
import FrameComponent from "../components/new-FrameComponent";
import FAQs from "../components/new-FAQs";
import LearnMoreAboutCosmo from "../components/new-LearnMoreAboutCosmo";
import Footer from "../components/Footer-main";
import "./new-StudentsParents.css";

const StudentsParents = () => {
  const navigate = useNavigate();

  const onNavBarClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onDivchakraStackContainerClick = useCallback(() => {
    navigate("/courses");
  }, [navigate]);

  return (
    <div className="students-parents">
      <NavBar onNavBarClick={onNavBarClick} logo="/new-rectangle-47@2x.png" />
      <div className="launch-discount-join-us-today-wrapper">
        <div className="launch-discount-join">
          Launch Discount! Join us today and get 20% OFF on 1st Month of
          Sessions
        </div>
      </div>
      <UnlockPotential />
      <section className="work">
        <h1 className="how-does-it">How Does It Work?</h1>
      </section>
      <Personalized1 />
      <section className="check-out-our-courses-parent">
        <h1 className="check-out-our">Check Out Our Courses!</h1>
        <div className="explore-a-wide">
          Explore a wide range of subjects and topics designed to meet your
          child's academic needs. From foundational skills to advanced learning,
          we have courses to support every student's journey.
        </div>
        <div
          className="divchakra-stack2"
          onClick={onDivchakraStackContainerClick}
        >
          <div className="link4">
            <div className="button2">
              <div className="view-courses">View Courses</div>
            </div>
          </div>
        </div>
      </section>
      <CoachContainer />
          <button className="divchakra-stack6">
            <div className="link9">
              <div className="button6">
                <div className="start-today">Start Today</div>
              </div>
            </div>
          </button>
      <FrameComponent />
      <FAQs />
      <LearnMoreAboutCosmo
        learnMoreAboutUs="Take the Leap Into Your Future"
        readyToBeTheArchitectOfYo="Ready to be the architect of your own success? At [Your Company Name], every lesson is an opportunity to grow, every challenge a chance to shine. With the support of our dedicated Coaches and a community that cheers you on, there's no limit to what you can achieve. Embrace your curiosity, fuel your passion, and turn your dreams into goals—and your goals into achievements. Join us now and start crafting the future you envision."
        startToday="Start Today"
      />
      <Footer class="footer"/>
    </div>
  );
};

export default StudentsParents;
