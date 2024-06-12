import "./CoachTestimony2.css";

const CoachTestimony2 = ({ ellipse2 }) => {
  return (
    <div className="couch-testimony-1">
      <div className="testimonial-quotes">
        <div className="testimonial-quotes-child" />
        <div className="every-line-of-container">
          <span>
            <p className="every-line-of">
              “Every line of code is a building block for innovation. As a
              coach, I empower students to create and solve with code, turning
              complex problems into exciting challenges they’re eager to
              tackle.”
            </p>
            <p className="priya-k-bs">Priya K., B.S. in Computer Science</p>
            <p className="stanford-university">Stanford University</p>
          </span>
        </div>
      </div>
      <div className="wrapper-ellipse-2">
        <img
          className="wrapper-ellipse-2-child"
          loading="lazy"
          alt=""
          src={ellipse2}
        />
      </div>
    </div>
  );
};

export default CoachTestimony2;
