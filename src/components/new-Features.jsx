import On from "./On";
import PropTypes from "prop-types";
import "./Features.css";

const Features = ({ className = "" }) => {
  return (
    <section className={`features ${className}`}>
      <img className="feature-icon" loading="lazy" alt="" src="/vector-2.svg" />
      <h1 className="features-unlocking-cosmic">
        Features: Unlocking Cosmic Potential 🚀
      </h1>
      <div className="benefit-list">
        <On
          oneOnOne1="/oneonone-1@2x.png"
          personalized1On1PrivateCl="Personalized 1-on-1 Private Classes"
          tailoredLearning="Tailored Learning"
          ourStudentsBenefitFromOne=": Our students benefit from one-on-one private classes with experienced instructors. Each lesson is personalized to match the student's pace and learning style, ensuring maximum comprehension and growth."
        />
        <On
          propMinHeight="unset"
          propAlignSelf="unset"
          propWidth="228px"
          oneOnOne1="/oneonone-11@2x.png"
          propHeight="179px"
          propHeight1="unset"
          personalized1On1PrivateCl="Project-Based Learning"
          propAlignSelf1="unset"
          propWidth1="322px"
          propHeight2="171px"
          tailoredLearning="Boost Your Skills:"
          ourStudentsBenefitFromOne=" Our curriculum includes engaging projects that challenge students to apply their knowledge in real-world scenarios. These projects enhance problem-solving skills, creativity, and critical thinking."
        />
        <On
          propMinHeight="unset"
          propAlignSelf="unset"
          propWidth="244px"
          oneOnOne1="/oneonone-12@2x.png"
          propHeight="174px"
          propHeight1="unset"
          personalized1On1PrivateCl="Progress Tracking"
          propAlignSelf1="unset"
          propWidth1="322px"
          propHeight2="171px"
          tailoredLearning="Stay Informed: "
          ourStudentsBenefitFromOne="Parents and students can easily track their academic journey through our intuitive progress tracking system. Monitor performance, view completed assignments, and access valuable insights into your child's educational development."
        />
        <On
          propMinHeight="unset"
          propAlignSelf="unset"
          propWidth="268px"
          oneOnOne1="/oneonone-13@2x.png"
          propHeight="179px"
          propHeight1="unset"
          personalized1On1PrivateCl="Collaborative Group Classes"
          propAlignSelf1="unset"
          propWidth1="322px"
          propHeight2="171px"
          tailoredLearning="Learn Together: "
          ourStudentsBenefitFromOne="COSMO also offers the opportunity for students to attend group classes, where they can interact, share ideas, and collaborate with peers. Learning becomes a cosmic adventure when you explore together!"
        />
        <On
          propMinHeight="unset"
          propAlignSelf="unset"
          propWidth="216px"
          oneOnOne1="/oneonone-14@2x.png"
          propHeight="179px"
          propHeight1="207px"
          personalized1On1PrivateCl="Achievement Showcase"
          propAlignSelf1="unset"
          propWidth1="322px"
          propHeight2="179px"
          tailoredLearning="Celebrate Success: "
          ourStudentsBenefitFromOne="COSMO believes in recognizing and celebrating every achievement, big or small. Students can showcase their accomplishments, from mastering a programming language to acing a math quiz, in their personalized achievement portfolio."
        />
        <On
          propMinHeight="487px"
          propAlignSelf="unset"
          propWidth="236px"
          oneOnOne1="/oneonone-15@2x.png"
          propHeight="150px"
          propHeight1="unset"
          personalized1On1PrivateCl="Safety and Supportive Environment"
          propAlignSelf1="unset"
          propWidth1="322px"
          propHeight2="171px"
          tailoredLearning="Cosmic Community: "
          ourStudentsBenefitFromOne="At COSMO, we prioritize creating a safe and supportive learning environment where students can thrive. We foster a sense of belonging and encourage open communication."
        />
      </div>
    </section>
  );
};

Features.propTypes = {
  className: PropTypes.string,
};

export default Features;
