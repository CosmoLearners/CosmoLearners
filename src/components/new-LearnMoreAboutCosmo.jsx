import { useMemo } from "react";
import PropTypes from "prop-types";
import "./new-LearnMoreAboutCosmo.css";

const LearnMoreAboutCosmo = ({
  className = "",
  propPadding,
  learnMoreAboutUs,
  propWidth,
  readyToBeTheArchitectOfYo,
  propWidth1,
  startToday,
}) => {
  const learnMoreAboutCosmoStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const learnMoreAboutStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const readyToBeStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <section
      className={`learn-more-about-cosmo3 ${className}`}
      style={learnMoreAboutCosmoStyle}
    >
      <h1 className="learn-more-about7" style={learnMoreAboutStyle}>
        {learnMoreAboutUs}
      </h1>
      <div className="ready-to-be" style={readyToBeStyle}>
        {readyToBeTheArchitectOfYo}
      </div>
      <button className="learnmore-button">
        <div className="link10">
          <div className="button7">
            <div className="start-today1">{startToday}</div>
          </div>
        </div>
      </button>
    </section>
  );
};

LearnMoreAboutCosmo.propTypes = {
  className: PropTypes.string,
  learnMoreAboutUs: PropTypes.string,
  readyToBeTheArchitectOfYo: PropTypes.string,
  startToday: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propWidth1: PropTypes.any,
};

export default LearnMoreAboutCosmo;
