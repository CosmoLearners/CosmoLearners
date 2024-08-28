import "./CoachTestimony1.css";

const CoachTestimony1 = ({ ellipse3 }) => {
  return (
    <div className="couch-testimony-2">
      <div className="rectangle-container">
        <div className="rectangle-div" />
        <div className="helping-students-see-container">
          <span>
            <p className="helping-students-see">
              "With over a decade of teaching experience, I engage my students in building exciting projects 
              and tackling complex problems, while fostering a deep love for programming and mathematics.
              "
            </p>
            <p className="alex-r-msc-in-applied-math">
              <b>Hamza K., B.Eng in Electrical Engineering and Computer Science</b>
            </p>
            <p className="mit">
              <b>UC Berkeley</b>
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
