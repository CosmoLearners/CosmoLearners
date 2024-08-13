import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CourseOffered from "../components/CourseOffered";
import JoinMovementContainer from "../components/JoinMovementContainer";
import Footer1 from "../components/Footer1";
import "./HomepageV.css";

const HomepageV = () => {
  return (
    <div className="homepage-v3">
      <NavBar logo="/rectangle-47@2x.png" />
      <div className="discount-container">
        <div className="launch-discount-join1">
          Launch Discount! Join us today and get 20% OFF on 1st Month of
          Sessions
        </div>
      </div>
      <Hero />
      <Features />
      <section className="story-join-us-footer">
        <img className="story-icon" loading="lazy" alt="" src="/vector-4.svg" />
        <div className="our-story">
          <div className="story-heading-container">
            <h2 className="heading-2">Our STORY</h2>
            <div className="at-cosmo-we">
              At COSMO, we are on a mission to empower students and educators
              alike to explore the vast universe of knowledge. Our journey
              begins with a shared passion for learning and a commitment to
              bridging the gap between eager students and dedicated teachers. We
              believe that education is the cosmic key that unlocks the
              potential of every individual.
            </div>
          </div>
          <h2 className="cosmo-scholar-students-container">
            <b>COSMO SCHOLAR:</b>
            <span>
              {" "}
              Students Want to Learn, Teachers Want to Teach, We Connect Them.
            </span>
          </h2>
        </div>
        <CourseOffered />
        <JoinMovementContainer />
        <Footer1 />
      </section>
    </div>
  );
};

export default HomepageV;
