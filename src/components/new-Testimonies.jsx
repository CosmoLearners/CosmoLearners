import PropTypes from "prop-types";
import "./new-Testimonies.css";

const Testimonies = ({ className = "" }) => {
  return (
    <section className={`testimonies ${className}`}>
      <div className="coach-testimonies">
        <h1 className="why-join-cosmo">Why Join Cosmo Scholar?</h1>
        <div className="coach-benefits">
          <div className="benefits-list">
            <img
              className="benefit-icons"
              loading="lazy"
              alt=""
              src="/ellipse-13@2x.png"
            />
            <b className="craft-individualized-strategie">
              Craft Individualized Strategies
            </b>
            <div className="our-coaches-design">
              Our Coaches design learning strategies that evolve with the
              student, ensuring that each learner's journey is as unique as
              their fingerprint.
            </div>
          </div>
          <div className="benefits-list">
            <img
              className="benefit-icons"
              loading="lazy"
              alt=""
              src="/ellipse-131@2x.png"
            />
            <b className="build-lasting-relationships">
              Build Lasting Relationships
            </b>
            <div className="our-coaches-design">
              Through long-term interaction, Coaches develop a deep
              understanding of their students, fostering a trusting and
              encouraging relationship that extends beyond academics.
            </div>
          </div>
          <div className="benefits-list">
            <img
              className="benefit-icons"
              loading="lazy"
              alt=""
              src="/ellipse-132@2x.png"
            />
            <b className="inspire-lifelong-learners">
              Inspire Lifelong Learners
            </b>
            <div className="our-coaches-design">
              By focusing on the joys of learning and the excitement of personal
              discovery, our Coaches inspire students to become lifelong
              learners, driven by curiosity and a love for knowledge.
            </div>
          </div>
          <div className="benefits-list">
            <img className="benefit-icons" alt="" src="/ellipse-15-1@2x.png" />
            <b className="empower-students">Empower Students</b>
            <div className="our-coaches-design">
              Our Coaches empower students to take charge of their learning,
              teaching them how to set goals, reflect on their progress, and
              celebrate their achievements.
            </div>
          </div>
          <div className="benefits-list">
            <img className="benefit-icons" alt="" src="/ellipse-15-2@2x.png" />
            <b className="inspire-lifelong-learners">
              Adaptive Learning Technology
            </b>
            <div className="our-coaches-design">
              Our advanced adaptive learning technology tailors the educational
              experience to each student's pace, providing immediate feedback
              and continuously challenging them at the optimum level for growth.
            </div>
          </div>
          <div className="benefits-list5">
            <img className="benefit-icons" alt="" src="/ellipse-15-3@2x.png" />
            <b className="craft-individualized-strategie">
              Comprehensive Support System
            </b>
            <div className="we-foster-a">
              We foster a holistic support network that includes collaborative
              peer interactions and resources for family engagement, ensuring
              that learning extends beyond individual sessions into a
              community-driven experience.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonies.propTypes = {
  className: PropTypes.string,
};

export default Testimonies;
