import { useCallback } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer-main";
import { useNavigate } from "react-router-dom";
import "./AboutUs.css";
import Button from "../components/Button.js"; 

const googleFormUrl = "https://forms.gle/8k6DMpSoKq8VjYjk7"; 

const onGoogleFormClick = () => {
  window.open(googleFormUrl, '_blank'); // Opens the Google Form in a new tab
};


const AboutUs = () => {
  const navigate = useNavigate();

  const onItemLink1Click = useCallback(() => {
    navigate("/become-a-tutor");
  }, [navigate]);

  return (
    <div className="about-us">
      {/* <NavBar3 /> */}
      { <NavBar/>}
      <section className="learn-more-about-cosmo4">
        <h2 className="learn-more-about3">Learn More About COSMO!</h2>
        <div className="at-cosmo-we1">
          At COSMO, we are on a mission to empower students and educators alike
          to explore the vast universe of knowledge. Our journey begins with a
          shared passion for learning and a commitment to bridging the gap
          between eager students and dedicated teachers. We believe that
          education is the cosmic key that unlocks the potential of every
          individual.
        </div>
        {/* <button className="divchakra-stack6">
          <div className="link6">
            <div className="button6" onClick={onGoogleFormClick}>
              <div className="join-us-today">Join Us Today!</div>
            </div>
          </div>
        </button> */}

      <Button text="Join Us today!" id="join-us-btn"/>
      </section>
      <section className="our-mission2">
        <div className="our-mission-group">
          <h2 className="our-mission3">Our Mission</h2>
          <h3 className="developing-student-skills">
            Developing student skills in science and Technology through fun,
            milestone based projects and customized study plans.
          </h3>
        </div>
      </section>
      <section className="vision-divider">
        <section className="every-child-deserves-a-world-c-parent">
        <h1 className="our-vision">OUR VISION</h1>
        <img className="frame-child" loading="lazy" alt="" />
          <div className="every-child-deserves">
            Every child deserves a world class education. Our capitalistic
            societies have ensured that only those that can pay their way
            through such an education/ the lucky ones will be able to afford it.
            Of course there are cases, where individuals from poorer households
            receive scholarships, but this is statistically insignificant. Our
            Vision is to share in each child’s curiosity, to challenge the
            status quo, to allow students to visit the stars. A child’s
            imagination is a powerful tool, and if nurtured correctly, can
            create a society of powerful, educated citizens that can carve a
            path to a more just, balanced, and peaceful society. Our vision is
            to allow children all over the world to learn and appreciate the
            STEM sciences, to use their imagination, just as a child is supposed
            to, to kindle their aspirations.
          </div>          
        </section>
      </section>
      <section className="our-mission4">
        <div className="values-statement">
          <h1 className="our-mission5">OUR VALUES</h1>
          <div className="every-child-is-container">
            <span className="every-child-is-container1">
              <p className="every-child-is">Every child is a genius</p>
              <p className="passion-innovation">{`Passion & Innovation`}</p>
              <p className="constant-improvementlearning">
                Constant Improvement/Learning
              </p>
              <p className="set-crazy-big">
                Set crazy big goals and make them happen
              </p>
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
