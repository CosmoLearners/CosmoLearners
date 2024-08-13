import { useMemo } from "react";
import PropTypes from "prop-types";
import "./new-Personalized.css";

const Personalized = ({
  className = "",
  propBackgroundColor,
  ellipse10,
  propHeight,
  title,
  meetWithOurExperiencedAdv,
  propWidth,
  prop,
}) => {
  const personalizedStyle = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`personalized ${className}`} style={personalizedStyle}>
      <div className="par-stud-personalized-inner">
        <img className="personalized-frame-item" alt="" src={ellipse10} />
      </div>
      <div
        className="par-stu-feature-title-coordinator-meet-par-stu-personalized-wrapper"
        style={frameDivStyle}
      >
        <div className="par-stu-feature-title-container">
          <p className="par-stu-feature-title">{title}</p>
          <p className="par-stu-feature-title">&nbsp;</p>
          <p className="meet-with-our">{meetWithOurExperiencedAdv}</p>
        </div>
      </div>
      <div className="par-stu-personalized-wrapper" style={frameDiv1Style}>
        <div className="empty">{prop}</div>
      </div>
    </div>
  );
};

Personalized.propTypes = {
  className: PropTypes.string,
  ellipse10: PropTypes.string,
  title: PropTypes.string,
  meetWithOurExperiencedAdv: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
};

export default Personalized;
