import ProgressTracking from "./ProgressTracking";
import Collaborate from "./Collaborate";
import "./Features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="wrapper-progress-icon">
        <img
          className="progress-icon"
          loading="lazy"
          alt=""
          src="/vector-2.svg"
        />
      </div>
      <h1 className="features-unlocking-cosmic">
        Features: Unlocking Cosmic Potential 🚀
      </h1>
      <div className="on-1-parent">
        <div className="on-1">
          <div className="on-1-child" />
          <div className="progress-tracking2">
            <img
              className="one-on-one-1-icon"
              loading="lazy"
              alt=""
              src="/oneonone-1@2x.png"
            />
          </div>
          <div className="personalized-classes">
            <h3 className="personalized-1-on-1-private">
              Personalized 1-on-1 Private Classes
            </h3>
            <div className="tailored-learning">
              <div className="tailored-learning-our-container">
                <span>
                  <i>Tailored Learning</i>
                  <span>
                    : Our students benefit from one-on-one private classes with
                    experienced instructors. Each lesson is personalized to
                    match the student's pace and learning style, ensuring
                    maximum comprehension and growth.
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="project-learning">
          <div className="project-learning-child" />
          <div className="project-image-container">
            <div className="project-image">
              <img
                className="planning-icon"
                loading="lazy"
                alt=""
                src="/planning@2x.png"
              />
            </div>
            <h3 className="project-based-learning">Project-Based Learning</h3>
          </div>
          <div className="project-description">
            <div className="boost-your-skills-container">
              <span>
                <i>Boost Your Skills:</i>
                <span>
                  {" "}
                  Our curriculum includes engaging projects that challenge
                  students to apply their knowledge in real-world scenarios.
                  These projects enhance problem-solving skills, creativity, and
                  critical thinking.rs
                </span>
              </span>
            </div>
          </div>
        </div>
        <ProgressTracking
          progress2="/progress-2@2x.png"
          progressTracking="Progress Tracking"
          stayInformed="Stay Informed: "
          parentsAndStudentsCanEasi="Parents and students can easily track their academic journey through our intuitive progress tracking system. Monitor performance, view completed assignments, and access valuable insights into your child's educational development."
        />
        <Collaborate
          collab3="/collab-3@2x.png"
          collaborativeGroupClasses="Collaborative Group Classes"
          learnTogether="Learn Together: "
          cOSMOAlsoOffersTheOpportu="COSMO also offers the opportunity for students to attend group classes, where they can interact, share ideas, and collaborate with peers. Learning becomes a cosmic adventure when you explore together!"
        />
        <Collaborate
          collab3="/achievement-2@2x.png"
          collaborativeGroupClasses="Achievement Showcase"
          learnTogether="Celebrate Success: "
          cOSMOAlsoOffersTheOpportu="COSMO believes in recognizing and celebrating every achievement, big or small. Students can showcase their accomplishments, from mastering a programming language to acing a math quiz, in their personalized achievement portfolio."
          propLeft="546.5px"
          propPadding="0px var(--padding-xl)"
          propFlex="unset"
          propOverflow="unset"
          propWidth="153px"
          propGap="unset"
          propHeight="179px"
        />

        <div className="safety-supportive">
          <div className="safety-supportive-child" />
          <div className="safety-image-container">
            <div className="safety-image">
              <img
                className="safety-icon"
                loading="lazy"
                alt=""
                src="/p/safety-3@2x.png"
              />
            </div>
            <h3 className="safety-supportive-h3">Safety and Supportive Environment</h3>
          </div>
          <div className="safety-description">
            <div className="cosmic-community-container">
              <span>
                <i>Cosmic Community: </i>
                <span>
                  {" "}
                  At COSMO, we prioritize creating a safe and supportive learning environment 
                  where students can thrive. We foster a sense of belonging and encourage
                  open communication.
                </span>
              </span>
            </div>
          </div>
        </div>
        {/* <Collaborate
          progress2="/safety-3@2x.png"
          progressTracking="Safety and Supportive Environment"
          stayInformed="Cosmic Community: "
          parentsAndStudentsCanEasi="At COSMO, we prioritize creating a safe and supportive learning environment where students can thrive. We foster a sense of belonging and encourage open communication."
          propGap="57px"
          propHeight1="150px"
          propWidth="173px"
        /> */}
      </div>
    </section>
  );
};

export default Features;
