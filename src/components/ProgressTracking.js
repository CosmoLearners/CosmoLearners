import { useMemo } from "react";
import "./ProgressTracking.css";

const ProgressTracking = ({
  progress2,
  progressTracking,
  stayInformed,
  parentsAndStudentsCanEasi,
  propGap,
  propHeight,
  propHeight1,
  propWidth,
}) => {
  const progressTrackingStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const progress2IconStyle = useMemo(() => {
    return {
      height: propHeight1,
      width: propWidth,
    };
  }, [propHeight1, propWidth]);

  return (
    <div className="progress-tracking" style={progressTrackingStyle}>
      <div className="progress-tracking-child" />
      <div className="progress-2-wrapper">
        <img
          className="progress-2-icon"
          loading="lazy"
          alt=""
          src={progress2}
          style={progress2IconStyle}
        />
      </div>
      <div className="progress-tracking-parent">
        <h3 className="progress-tracking1">{progressTracking}</h3>
        <div className="stay-informed-parents-and-stu-wrapper">
          <div className="stay-informed-parents-container">
            <span>
              <i>{stayInformed}</i>
              <span>{parentsAndStudentsCanEasi}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracking;
