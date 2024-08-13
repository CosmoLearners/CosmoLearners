import { useMemo } from "react";
import PropTypes from "prop-types";
import "./CompetitiveCompensation.css";

const CompetitiveCompensation = ({
  className = "",
  propHeight,
  propAlignSelf,
  propWidth,
  oneOnOne1,
  competitiveCompensation,
  propAlignSelf1,
  propWidth1,
  earnWhatYouDeserveOurCoac,
  propHeight1,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const featureIconRowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  const featureDescriptionRowStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
      width: propWidth1,
    };
  }, [propAlignSelf1, propWidth1]);

  const earnWhatYouStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div className={`competitive-compensation ${className}`}>
      <div
        className="competitive-compensation-child"
        style={rectangleDivStyle}
      />
      <div className="feature-icon-row" style={featureIconRowStyle}>
        <img
          className="one-on-one-1-icon1"
          loading="lazy"
          alt=""
          src={oneOnOne1}
        />
      </div>
      <div className="compensation-description">
        <b className="competitive-compensation1">{competitiveCompensation}</b>
        <div
          className="feature-description-row"
          style={featureDescriptionRowStyle}
        >
          <div className="earn-what-you" style={earnWhatYouStyle}>
            {earnWhatYouDeserveOurCoac}
          </div>
        </div>
      </div>
    </div>
  );
};

CompetitiveCompensation.propTypes = {
  className: PropTypes.string,
  oneOnOne1: PropTypes.string,
  competitiveCompensation: PropTypes.string,
  earnWhatYouDeserveOurCoac: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf1: PropTypes.any,
  propWidth1: PropTypes.any,
  propHeight1: PropTypes.any,
};

export default CompetitiveCompensation;
