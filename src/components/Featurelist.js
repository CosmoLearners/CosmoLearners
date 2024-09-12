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
          <h3 className="feature-text-header">Personalized 1-on-1 Private Classes</h3>
        </div>
      </div>
    ),
    back: (
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
          <div className={`feature-text-box`}>
            <span >
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
    ),
  },
  // Add more features here
];

export default featuresList;
