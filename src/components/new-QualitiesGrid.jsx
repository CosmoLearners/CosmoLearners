import PropTypes from "prop-types";
import "./new-QualitiesGrid.css";

const QualitiesGrid = ({ className = "" }) => {
  return (
    <div className={`qualities-grid ${className}`}>
      <div className="personalized3">
        <img
          className="personalized-child"
          loading="lazy"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <div className="expertise-and-passion-container">
          <span className="expertise-and-passion-container1">
            <p className="expertise-and-passion-for-teac">
              <span className="expertise-and-passion-for-teac1">
                <span className="expertise-and-passion">
                  Expertise and Passion for Teaching
                </span>
              </span>
            </p>
            <p className="expertise-and-passion-for-teac">
              <span className="blank-line96">
                <span className="expertise-and-passion-for-teac1">&nbsp;</span>
              </span>
            </p>
            <p className="we-seek-coaches-with-a-strong">
              <span className="blank-line96">
                <span>
                  We seek Coaches with a strong grasp of their subject matter
                  who are genuinely enthusiastic about teaching and fostering a
                  love for learning in their students.
                </span>
              </span>
            </p>
          </span>
        </div>
      </div>
      <div className="personalized3">
        <div className="adaptability-and-creativity-container">
          <span className="expertise-and-passion-container1">
            <p className="adaptability-and-creativity">
              Adaptability and Creativity
            </p>
            <p className="adaptability-and-creativity">&nbsp;</p>
            <p className="we-seek-coaches-with-a-strong">
              Ideal candidates are adaptable, ready to personalize education
              with creative strategies that cater to individual learning styles
              using our advanced resources.
            </p>
          </span>
        </div>
        <img
          className="personalized-child"
          alt=""
          src="/rectangle-44-1@2x.png"
        />
      </div>
      <div className="personalized3">
        <img
          className="personalized-child"
          alt=""
          src="/rectangle-44-2@2x.png"
        />
        <div className="adaptability-and-creativity-container">
          <span className="expertise-and-passion-container1">
            <p className="adaptability-and-creativity">Commitment to Growth</p>
            <p className="adaptability-and-creativity">&nbsp;</p>
            <p className="we-seek-coaches-with-a-strong">
              Our Coaches are lifelong learners, dedicated not only to their
              personal development but also to the academic and personal growth
              of their students.
            </p>
          </span>
        </div>
      </div>
      <div className="personalized3">
        <div className="adaptability-and-creativity-container">
          <span className="expertise-and-passion-container1">
            <p className="adaptability-and-creativity">
              Communication and Empathy
            </p>
            <p className="adaptability-and-creativity">&nbsp;</p>
            <p className="we-seek-coaches-with-a-strong">
              Strong interpersonal skills are a must, with the ability to
              communicate complex ideas clearly and empathetically to connect
              with students and parents alike.
            </p>
          </span>
        </div>
        <img
          className="personalized-child"
          alt=""
          src="/rectangle-44-3@2x.png"
        />
      </div>
      <div className="personalized3">
        <img
          className="personalized-child"
          alt=""
          src="/rectangle-44-4@2x.png"
        />
        <div className="adaptability-and-creativity-container">
          <span className="expertise-and-passion-container1">
            <p className="adaptability-and-creativity">
              Community and Collaboration
            </p>
            <p className="adaptability-and-creativity">&nbsp;</p>
            <p className="we-seek-coaches-with-a-strong">
              We look for team-oriented individuals who will contribute to our
              supportive learning community and collaborate towards nurturing
              the next generation.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

QualitiesGrid.propTypes = {
  className: PropTypes.string,
};

export default QualitiesGrid;
