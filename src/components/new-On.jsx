import { useMemo } from "react";
import PropTypes from "prop-types";
import "./new-On.css";

const On = ({
  className = "",
  propMinHeight,
  propAlignSelf,
  propWidth,
  oneOnOne1,
  propHeight,
  propHeight1,
  personalized1On1PrivateCl,
  propAlignSelf1,
  propWidth1,
  propHeight2,
  tailoredLearning,
  ourStudentsBenefitFromOne,
}) => {
  const on1Style = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const featureIconsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const oneOnOne1IconStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const featureDescriptionsStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const detailedDescriptionsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const tailoredLearningOurContainerStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className={`on-1 ${className}`} style={on1Style}>
      <div className="on-1-child" />
      <div className="feature-icons" style={featureIconsStyle}>
        <img
          className="one-on-one-1-icon"
          loading="lazy"
          alt=""
          src={oneOnOne1}
          style={oneOnOne1IconStyle}
        />
      </div>
      <div className="feature-descriptions" style={featureDescriptionsStyle}>
        <b className="personalized-1-on-1-private">
          {personalized1On1PrivateCl}
        </b>
        <div
          className="detailed-descriptions"
          style={detailedDescriptionsStyle}
        >
          <div
            className="tailored-learning-our-container"
            style={tailoredLearningOurContainerStyle}
          >
            <span>
              <i>{tailoredLearning}</i>
              <span>{ourStudentsBenefitFromOne}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

On.propTypes = {
  className: PropTypes.string,
  oneOnOne1: PropTypes.string,
  personalized1On1PrivateCl: PropTypes.string,
  tailoredLearning: PropTypes.string,
  ourStudentsBenefitFromOne: PropTypes.string,

  /** Style props */
  propMinHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight2: PropTypes.any,
};

export default On;
