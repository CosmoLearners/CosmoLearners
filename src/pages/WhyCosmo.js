import NavBar2 from "../components/NavBar2";
import WhyJoin from "../components/WhyJoin";
import NavBar from "../components/NavBar"
import CoachesVsTutors from "../components/CoachesVsTutors";
import CouchTestimonies1 from "../components/CouchTestimonies1";
import CollegesList1 from "../components/CollegesList1";
// import Footer from "../components/Footer";
import Footer from "../components/Footer-main";

import "./WhyCosmo.css";

const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7"; 

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};

const WhyCosmo = () => {
  return (
    <div className="why-cosmo">
      {/* <NavBar2 /> */}
      {<NavBar /> }
      <section className="learn-more-about-cosmo2">
        <h1 className="learn-more-about1">Unlock Your Learning Potential</h1>
        <div className="welcome-to-cosmo">
          Welcome to Cosmo, where your educational journey is as unique as you
          are! We believe that learning is a personal adventure, and with the
          guidance of our expert Coaches, your path to knowledge is limitless.
          Dive into subjects that fascinate you, tackle challenges with
          confidence, and build skills that will last a lifetime. Whether it’s
          mastering the mysteries of mathematics, coding your first app, or
          exploring the frontiers of AI, we're here to support you every step of
          the way. Get ready to learn, grow, and succeed with us!
        </div>
        <button className="divchakra-stack3">
          <div className="link3">
            <div className="button3" onClick={onGoogleFormClick}>
              <div className="start-today">Start Today</div>
            </div>
          </div>
        </button>
      </section>
      <WhyJoin />
      <CoachesVsTutors />
      <section className="mission-statement">
        <h1 className="our-mission1">Meet Our Coaches!</h1>
        <div className="at-cosmo-our1">
          At Cosmo, our Coaches are more than just tutors; they are mentors,
          motivators, and educators with a passion for igniting a love of
          learning in every child. Each Coach is hand-selected for their deep
          subject matter expertise, creative teaching approach, and an
          unwavering commitment to student success. They are empathetic
          communicators, skilled in connecting with students to make learning
          engaging and effective.
        </div>
      </section>
      <CouchTestimonies1 />
      <section className="coach-qualities">
        <div className="qualities-image">
          <img
            className="qualities-background-icon"
            loading="lazy"
            alt=""
            src="/rectangle-451@2x.png"
          />
        </div>
        <div className="qualities-of-our-container2">
          <span className="qualities-of-our-container3">
            <p className="qualities-of-our-coaches1">
              <span>
                <span className="qualities-of-our1">
                  Qualities of Our Coaches
                </span>
              </span>
            </p>
            <p className="blank-line1">
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <ul className="expert-knowledge-our-coaches2">
              <li className="expert-knowledge-our-coaches3">
                <span>
                  <b className="expert-knowledge1">Expert Knowledge</b>
                  <span>
                    : Our Coaches possess a profound understanding of their
                    subjects, ensuring your child learns from the best.
                  </span>
                </span>
              </li>
              <li className="engaging-methodologies-they-u1">
                <span>
                  <b className="engaging-methodologies1">
                    Engaging Methodologies
                  </b>
                  <span className="they-use-innovative1">
                    : They use innovative, adaptive techniques tailored to your
                    child's unique learning style.
                  </span>
                </span>
              </li>
              <li className="inspirational-mentors-with-th1">
                <span>
                  <b className="inspirational-mentors1">
                    Inspirational Mentors
                  </b>
                  <span className="with-their-enthusiastic1">
                    : With their enthusiastic and supportive nature, our Coaches
                    do more than teach; they inspire.
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <b className="empathetic-guides1">Empathetic Guides</b>
                  <span className="they-listen-and1">
                    : They listen and adjust, providing emotional and academic
                    support to foster confidence and independence.
                  </span>
                </span>
              </li>
            </ul>
          </span>
        </div>
      </section>
      <button className="divchakra-stack4">
        <div className="link4">
          <div className="button4" onClick={onGoogleFormClick}>
            <div className="apply-today3">Apply Today</div>
          </div>w
        </div>
      </button>
      <CollegesList1 />
      <section className="learn-more-about-cosmo3">
        <h1 className="learn-more-about2">Take the Leap Into Your Future</h1>
        <div className="ready-to-be">
          Ready to be the architect of your own success? At Cosmo Scholar,
          every lesson is an opportunity to grow, every challenge a chance to
          shine. With the support of our dedicated Coaches and a community that
          cheers you on, there's no limit to what you can achieve. Embrace your
          curiosity, fuel your passion, and turn your dreams into goals—and your
          goals into achievements. Join us now and start crafting the future you
          envision.
        </div>
        <button className="divchakra-stack5">
          <div className="link5">
            <div className="button5" onClick={onGoogleFormClick}>
              <div className="start-today1">Start Today</div>
            </div>
          </div>
        </button>
      </section>
      <Footer class="footer"/>
      {/* <Footer
        cosmo12="/cosmo-1-21@2x.png"
        ceb5d14e108cfa7e8f1779Pri="/63ceb5d14e108cfa7e8f1779-privacyoptions201webp@2x.png"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="5845px"
        propLeft="0px"
        propWidth="100%"
        propWidth1="1494px"
        propPadding="unset"
        propWidth2="1494px"
        propPadding1="0px 257.8px"
      /> */}
    </div>
  );
};

export default WhyCosmo;

