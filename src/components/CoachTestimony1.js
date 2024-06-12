import "./CoachTestimony1.css";

const CoachTestimony1 = ({ ellipse3 }) => {
  return (
    <div className="couch-testimony-2">
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <div className="helping-students-see-container">
          <span>
            <p className="helping-students-see">
              "Helping students see the magic in numbers and equations is what I
              love most about coaching at Cosmo. There’s a unique joy in guiding
              them through their math journey and celebrating every 'aha' moment
              together."
            </p>
            <p className="alex-r-msc-in-applied-math">
              <b>Alex R., M.Sc. in Applied Mathematics</b>
            </p>
            <p className="mit">
              <b>MIT</b>
            </p>
          </span>
        </div>
      </div>
      <div className="wrapper-ellipse-3">
        <img
          className="wrapper-ellipse-3-child"
          loading="lazy"
          alt=""
          src={ellipse3}
        />
      </div>
    </div>
  );
};

export default CoachTestimony1;
