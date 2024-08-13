import PropTypes from "prop-types";
import "./CourseOffered.css";

const CourseOffered = ({ className = "" }) => {
  return (
    <div className={`course-offered ${className}`}>
      <h3 className="heading-21">Become experts in Coding and Math!</h3>
      <div className="course-list">
        <button className="python">
          <div className="divchakra-stack9">
            <div className="spanchakra-avatar">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg@2x.png"
                />
              </div>
            </div>
            <div className="python1">Python</div>
          </div>
        </button>
        <button className="scratch">
          <div className="divchakra-stack10">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-1@2x.png"
                />
              </div>
            </div>
            <div className="scratch1">Scratch</div>
          </div>
        </button>
        <button className="java">
          <div className="divchakra-stack11">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-2@2x.png"
                />
              </div>
            </div>
            <div className="java1">Java</div>
          </div>
        </button>
        <button className="swift">
          <div className="divchakra-stack12">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-3@2x.png"
                />
              </div>
            </div>
            <div className="swift1">Swift</div>
          </div>
        </button>
        <button className="algebra">
          <div className="divchakra-stack13">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-4@2x.png"
                />
              </div>
            </div>
            <div className="algebra-wrapper">
              <div className="scratch1">Algebra</div>
            </div>
          </div>
        </button>
        <button className="swift">
          <div className="divchakra-stack12">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-5@2x.png"
                />
              </div>
            </div>
            <div className="statistics1">Statistics</div>
          </div>
        </button>
        <button className="swift">
          <div className="divchakra-stack12">
            <div className="spanchakra-avatar1">
              <div className="course-satsvg">
                <img
                  className="course-satsvg-icon"
                  alt=""
                  src="/coursesatsvg-6@2x.png"
                />
              </div>
            </div>
            <div className="calculus1">Calculus</div>
          </div>
        </button>
        <div className="link-button">
          <div className="more">More!</div>
          <div className="img">
            <img
              className="vector-icon1"
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

CourseOffered.propTypes = {
  className: PropTypes.string,
};

export default CourseOffered;
