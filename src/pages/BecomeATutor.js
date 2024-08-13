import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import WhatMakesUsDifferent from "../components/WhatMakesUsDifferent";
import CoachTestimonies from "../components/CoachTestimonies";
import CollegesList from "../components/CollegesList";
import Footer from "../components/Footer";
import "./BecomeATutor.css";

const BecomeATutor = () => {
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
      {/* <NavBar1
        onNavBarClick={onNavBarClick}
        onLinkABOUTClick={onLinkABOUTClick}
        onLinkCOURSESClick={onLinkCOURSESClick}
        onLinkPARENTSClick={onLinkPARENTSClick}
        onLinkBECOMEClick={onLinkBECOMEClick}
        onLinkContainerClick={onLinkContainerClick}
      /> */}
      <section className="learn-more-about-cosmo">
        <h1 className="learn-more-about-container">
          <span className="learn-more-about-container1">
            {/* <p className="empower-the-next">{`Empower the Next Generation `}</p> */}
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
              <div className="apply-today">Apply Today</div>
            </div>
          </div>
        </button>
      </section>
      <WhatMakesUsDifferent />
      {/* <FrameComponent2 /> */}
      <section className="mission">
        <div className="our-mission-parent">
          <h1 className="our-mission">Meet Our Coaches!</h1>
          <div className="at-cosmo-our">
            At Cosmo, our Coaches are more than just tutors; they are mentors,
            motivators, and educators with a passion for igniting a love of
            learning in every child. Each Coach is hand-selected for their deep
            subject matter expertise, creative teaching approach, and an
            unwavering commitment to student success. They are empathetic
            communicators, skilled in connecting with students to make learning
            engaging and effective.
          </div>
        </div>
        <CoachTestimonies />
        <div className="content-container-parent">
          <div className="content-container">
            <img
              className="content-container-child"
              loading="lazy"
              alt=""
              src="/rectangle-45@2x.png"
            />
          </div>
          <div className="qualities-of-our-container">
            <span className="qualities-of-our-container1">
              <p className="qualities-of-our-coaches">
                <span>
                  <span className="qualities-of-our">
                    Qualities of Our Coaches
                  </span>
                </span>
              </p>
              <p className="blank-line">
                <span>
                  <span>&nbsp;</span>
                </span>
              </p>
              <ul className="expert-knowledge-our-coaches">
                <li className="expert-knowledge-our-coaches1">
                  <span>
                    <b className="expert-knowledge">Expert Knowledge</b>
                    <span>
                      : Our Coaches possess a profound understanding of their
                      subjects, ensuring your child learns from the best.
                    </span>
                  </span>
                </li>
                <li className="engaging-methodologies-they-u">
                  <span>
                    <b className="engaging-methodologies">
                      Engaging Methodologies
                    </b>
                    <span className="they-use-innovative">
                      : They use innovative, adaptive techniques tailored to
                      your child's unique learning style.
                    </span>
                  </span>
                </li>
                <li className="inspirational-mentors-with-th">
                  <span>
                    <b className="inspirational-mentors">
                      Inspirational Mentors
                    </b>
                    <span className="with-their-enthusiastic">
                      : With their enthusiastic and supportive nature, our
                      Coaches do more than teach; they inspire.
                    </span>
                  </span>
                </li>
                <li>
                  <span>
                    <b className="empathetic-guides">Empathetic Guides</b>
                    <span className="they-listen-and">
                      : They listen and adjust, providing emotional and academic
                      support to foster confidence and independence.
                    </span>
                  </span>
                </li>
              </ul>
            </span>
          </div>
        </div>
        <div className="divchakra-stack-wrapper">
          <button className="divchakra-stack1">
            <div className="link1">
              <div className="button1">
                <div className="apply-today1">Apply Today</div>
              </div>
            </div>
          </button>
        </div>
        <CollegesList />
      </section>
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
        <button className="divchakra-stack2">
          <div className="link2">
            <div className="button2">
              <div className="apply-today2">Apply Today</div>
            </div>
          </div>
        </button>
      </section>
      <Footer
        cosmo12="/cosmo-1-2@2x.png"
        ceb5d14e108cfa7e8f1779Pri="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp@2x.png"
      />
    </div>
  );
};

export default BecomeATutor;
