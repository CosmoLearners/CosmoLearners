const featuresList = [
  {
    id: 1,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/oneonone-1@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Personalized 1-on-1 Private Classes
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Tailored Learning</i>
        <span>
          : Our students benefit from one-on-one private classes with
          experienced instructors. Each lesson is personalized to
          match the student's pace and learning style, ensuring
          maximum comprehension and growth.
        </span>
      </span>
    )
  },
  {
    id: 2,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/planning@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Project-Based Learning
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Boost Your Skills:</i>
        <span>
          {" "}
          Our curriculum includes engaging projects that challenge
          students to apply their knowledge in real-world scenarios.
          These projects enhance problem-solving skills, creativity, and
          critical thinking.
        </span>
      </span>
    )
  },
  {
    id: 3,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/progress-2@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Progress Tracking
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Stay Informed:</i>
        <span>
          {" "}
          Parents and students can easily track their academic journey through our 
          intuitive progress tracking system. Monitor performance, 
          view completed assignments, and access valuable insights into 
          your child's educational development.
        </span>
      </span>
    )
  },
  {
    id: 4,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/collab-3@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Collaborative Group Classes
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Learn Together:</i>
        <span>
          {" "}
          COSMO also offers the opportunity for students 
          to attend group classes, where they can interact,
          share ideas, and collaborate with peers. Learning becomes 
          a cosmic adventure when you explore together!
        </span>
      </span>
    )
  },
  {
    id: 5,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/achievement-2@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Achievement Showcase
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Celebrate Success:</i>
        <span>
          {" "}
          COSMO believes in recognizing and celebrating every 
          achievement, big or small. Students can showcase their 
          accomplishments, from mastering a programming language 
          to acing a math quiz, in their personalized achievement 
          portfolio.
        </span>
      </span>
    )
  },
  {
    id: 6,
    front: (
      <div>
        <div className="single-feature-img-container">
          <img
            className="single-feature-img"
            loading="lazy"
            alt=""
            src="/safety-3@2x.png"
          />
        </div>
        <div className="feature-text-container">
          <h3 className="feature-text-header">
            Safety and Supportive Environment
          </h3>
        </div>
      </div>
    ),
    expand: (
      <span>
        <i>Cosmic Community:</i>
        <span>
          {" "}
          At COSMO, we prioritize creating a safe and supportive learning environment 
          where students can thrive. We foster a sense of belonging and encourage
          open communication.
        </span>
      </span>
    )
  }
];

export default featuresList;
